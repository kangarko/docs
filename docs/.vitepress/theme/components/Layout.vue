<!-- Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute, useData } from 'vitepress'
import { computed, watch, onMounted, nextTick, ref } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()
const { frontmatter } = useData()

// Check if we're in iframe mode
const isIframeMode = computed(() => {
  if (typeof window === 'undefined') return false
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('iframe') === 'true'
})

// Extract product name from URL path
const currentProduct = computed(() => {
  const path = route.path.split('/')
  // If there's a path segment after the first slash, use it as the product name
  if (path.length > 1 && path[1]) {
    return path[1].toLowerCase()
  }
  return null
})

// Format the product name for display (capitalize words)
const formattedProductName = computed(() => {
  if (!currentProduct.value) return null
  
  // Special cases for specific plugin names
  const specialFormats = {
    'chatcontrol': 'ChatControl',
    'corearena': 'CoreArena'
  }
  
  // Return special format if defined, otherwise capitalize first letter
  return specialFormats[currentProduct.value] || 
         currentProduct.value.charAt(0).toUpperCase() + currentProduct.value.slice(1)
})

// Function to add product header to the sidebar
const addProductHeader = () => {
  nextTick(() => {
    // Check if running in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Always remove any existing header first
    const existingHeader = document.querySelector('.sidebar-header')
    if (existingHeader) {
      existingHeader.remove()
    }
    
    // Only add the header if we have a valid product
    if (!currentProduct.value) {
      return
    }
    
    const sidebar = document.querySelector('.VPSidebar')
    if (!sidebar) return
    
    // Create header element
    const header = document.createElement('div')
    header.className = 'sidebar-header'
    header.id = `sidebar-header-${currentProduct.value}` // Add unique ID for debugging
    
    // Create the flexbox container
    const flexContainer = document.createElement('div')
    flexContainer.className = 'product-header-flex'
    
    // Create image element
    const img = document.createElement('img')
    img.className = 'product-icon'
    
    // Special handling for "general" section
    if (currentProduct.value === 'general') {
      img.src = `/images/plugin-icon/placeholder.svg` // Use the SVG placeholder
      img.alt = 'General'
      
      // Create product name element with "General" text
      const nameElement = document.createElement('div')
      nameElement.className = 'product-name'
      nameElement.textContent = 'General'
      
      // Assemble the header
      flexContainer.appendChild(img)
      flexContainer.appendChild(nameElement)
      header.appendChild(flexContainer)
    } else {
      // Normal case for other product sections
      img.src = `/images/plugin-icon/${currentProduct.value}.png`
      img.alt = formattedProductName.value
      
      // Add onerror handler to hide header if image doesn't exist
      img.onerror = () => {
        header.style.display = 'none'
      }
      
      // Create product name element
      const nameElement = document.createElement('div')
      nameElement.className = 'product-name'
      nameElement.textContent = formattedProductName.value
      
      // Assemble the header
      flexContainer.appendChild(img)
      flexContainer.appendChild(nameElement)
      header.appendChild(flexContainer)
    }
    
    // Insert header at the top of sidebar
    const sidebarNav = sidebar.querySelector('.VPSidebarNav')
    if (sidebarNav) {
      sidebar.insertBefore(header, sidebarNav)
    } else {
      sidebar.prepend(header)
    }

    // Fix any curtains that might be hiding our header
    const curtains = document.querySelectorAll('.aside-curtain, .curtain')
    curtains.forEach(curtain => {
      curtain.style.display = 'none'
    })
  })
}

// Function to handle iframe mode
const handleIframeMode = () => {
  if (!isIframeMode.value || typeof document === 'undefined') return
  
  nextTick(() => {
    // Add iframe-mode class to body for CSS targeting
    document.body.classList.add('iframe-mode')
    
    // Hide navigation elements
    const navbar = document.querySelector('.VPNav')
    if (navbar) navbar.style.display = 'none'
    
    const sidebar = document.querySelector('.VPSidebar')
    if (sidebar) sidebar.style.display = 'none'
    
    // Adjust layout to use full width
    const layout = document.querySelector('.VPLayout')
    if (layout) layout.classList.add('iframe-layout')
    
    // Hide footer
    const footer = document.querySelector('.VPFooter')
    if (footer) footer.style.display = 'none'
    
    // Remove any extra padding
    const doc = document.querySelector('.VPDoc')
    if (doc) {
      doc.style.paddingTop = '0'
      doc.style.paddingBottom = '0'
    }
    
    // Get page title - try to find the h1 heading first
    let pageTitle = ''
    const h1 = document.querySelector('.VPContent h1')
    if (h1) {
      pageTitle = h1.textContent
    } else if (document.title) {
      // Fall back to document title
      pageTitle = document.title.split('|')[0].trim() // Remove site name if present
    }
    
    // Add a small "Loaded in popup" indicator
    const container = document.querySelector('.container')
    if (container) {
      const indicator = document.createElement('div')
      indicator.className = 'iframe-indicator'
      
      // If we have a page title, include it
      if (pageTitle) {
        indicator.innerHTML = `<span class="iframe-indicator-text">Viewing in popup</span>`
      } else {
        indicator.textContent = 'Viewing in popup'
      }
      
      container.prepend(indicator)
    }
  })
}

onMounted(() => {
  addProductHeader()
  handleIframeMode()
})

// Re-add header when route changes
watch(
  () => route.path,
  () => {
    if (!isIframeMode.value) {
      addProductHeader()
    }
    handleIframeMode()
  },
  { immediate: true } // Run the watcher immediately after setup
)
</script>

<template>
  <Layout />
</template>

<style>
/* Override the VitePress curtain styles */
.aside-curtain, .curtain {
  display: none !important;
}

.sidebar-header {
  margin: 10px 0;
  position: relative;
  z-index: 100;
}

.product-header-flex {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0px;
  overflow: hidden;
}

.product-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
}

.product-name {
  font-size: 1.25rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  letter-spacing: 0.02em;
  flex: 1;
}

.dark .product-name {
  color: var(--vp-c-brand-lighter);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Iframe mode styles */
.iframe-mode {
  padding: 0 !important;
  margin: 0 !important;
}

.iframe-layout {
  padding-top: 0 !important;
  max-width: 100% !important;
}

.iframe-mode .VPContent {
  padding: 0 !important;
}

.iframe-mode .VPDoc {
  padding-top: 20px !important;
  max-width: 100% !important;
}

.iframe-mode .container {
  max-width: 100% !important;
  margin: 0 auto !important;
  padding: 0 24px !important;
}

.iframe-indicator {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
}

/* Fix layout for content in iframe mode */
.iframe-mode .content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Hide certain elements in iframe mode */
.iframe-mode .aside {
  display: none !important;
}
</style> 