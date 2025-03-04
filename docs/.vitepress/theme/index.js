// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import Tabs from './components/Tabs.vue'
import TabPanel from './components/TabPanel.vue'
import GitHubFile from './components/GitHubFile.vue'
import Layout from './components/Layout.vue'
import CrossSectionLink from './components/CrossSectionLink.vue'
import Modal from './components/Modal.vue'
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick, h } from 'vue'
import { useRoute } from 'vitepress'

// Import Prism for custom language definition
import Prism from 'prismjs'

// Define our custom ChatControl rules language
Prism.languages.rs = {
  'comment': {
    pattern: /#.*/,
    greedy: true
  },
  'declaration': {
    pattern: /\bmatch\s+([^#\n]+)/i,
    greedy: true
  },
  'message-group': {
    pattern: /\b(group)\s+([a-zA-Z0-9_-]+)\b/,
    greedy: true
  },
  'message-definition': {
    pattern: /\bmessage:(?:\s*-\s*.+)+|\bmessage:\s*[^\n]+/,
    greedy: true
  },
  'primary-operator': {
    pattern: /\b(require|ignore|name|group|then|dont|disabled|clear|strip|delay|player delay|spy|random|proxy|prefix|suffix|require self|ignore self)\b/,
    greedy: true
  },
  'sender-receiver-operator': {
    pattern: /\b(require sender|require receiver|ignore sender|ignore receiver)\s+(perm|script|gamemode|world|region|channel|variable|server)\b/,
    greedy: true
  },
  'secondary-operator': {
    pattern: /\b(replace|rewrite|rewritein|warn|deny|kick|title|actionbar|bossbar|sound|book|notify|fine|points|log|write|discord|command|console|proxyconsole|abort|foreach console)\b/,
    greedy: true
  },
  'death-operator': {
    pattern: /\b(deny silently)\b|\b(require cause|require killer item|ignore killer item|require projectile|require block|require killer|require boss|require damage)\b/,
    greedy: true
  },
  'special-operation': {
    pattern: /\b(before replace|save key|require playedbefore|ignore playedbefore)\b/,
    greedy: true
  },
  'message-item': {
    pattern: /'[^']*'|"[^"]*"/,
    greedy: true
  },
  'backtick-string': {
    pattern: /`[^`]*`/,
    greedy: true
  },
  'placeholder': {
    pattern: /\{[^}]+\}/,
    greedy: true
  },
  'group-reference': {
    pattern: /\$[0-9]+/,
    greedy: true
  },
  'special-mode': {
    pattern: /\b(true|false)\b/i,
    greedy: true
  },
  'time-unit': {
    pattern: /\b(second|seconds|minute|minutes|hour|hours|day|days)\b/,
    greedy: true
  },
  'regex': {
    pattern: /\(.*?\)|\[.*?\]|\\b|\\s\*|\^\.|\^[^\s]+|\$|[^\s]+\$/,
    greedy: true
  },
  'boolean': {
    pattern: /\b(true|false)\b/i,
    greedy: true
  },
  'date': {
    pattern: /\b[0-9]{1,2}\s+[A-Za-z]{3}\s+[0-9]{4},\s+[0-9]{1,2}:[0-9]{1,2}\b/,
    greedy: true
  },
  'file-import': {
    pattern: /@import\s+[a-zA-Z0-9_-]+/,
    greedy: true
  }
}

// Ensure language loading on client side
if (typeof window !== 'undefined') {
  window.Prism = Prism;
  window.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
  });
}

export default {
  extends: DefaultTheme,
  Layout, // Use our custom layout
  enhanceApp({ app }) {
    app.component('Tabs', Tabs)
    app.component('TabPanel', TabPanel)
    app.component('GitHubFile', GitHubFile)
    app.component('CrossSectionLink', CrossSectionLink)
    app.component('Modal', Modal)
  },
  setup() {
    const route = useRoute()
    
    // Function to make external links open in new tabs
    const processExternalLinks = () => {
      const links = document.querySelectorAll('a')
      links.forEach(link => {
        const href = link.getAttribute('href')
        // Check if link is external (starts with http or https)
        if (href && (href.startsWith('http://') || href.startsWith('https://')) && !link.getAttribute('target')) {
          link.setAttribute('target', '_blank')
          link.setAttribute('rel', 'noopener noreferrer')
        }
      })
    }

    // Function to process cross-section links
    const processCrossSectionLinks = () => {
      // Skip processing if in iframe mode
      if (window.location.search.includes('iframe=true')) {
        return
      }
      
      const links = document.querySelectorAll('.vp-doc a, .VPSidebar a')
      const currentSection = route.path.split('/').filter(Boolean)[0] || ''
      
      links.forEach(link => {
        const href = link.getAttribute('href')
        
        // Skip if not a valid link or already processed
        if (!href || link.classList.contains('cross-section-processed') || 
            href.startsWith('http://') || href.startsWith('https://') ||
            link.closest('.cross-section-link') || link.closest('.modal-content')) {
          return
        }
        
        // Check if this is a cross-section link
        const linkSection = href.startsWith('/') ? href.split('/').filter(Boolean)[0] || '' : ''
        
        // If it's a link to a different section and is not in root
        if (linkSection && linkSection !== currentSection && linkSection !== '#') {
          // Mark as processed
          link.classList.add('cross-section-processed')
          
          // Only process general links from other sections
          const generalSections = ['general']
          if (generalSections.includes(linkSection)) {
            // Save original text content
            const originalText = link.textContent
            
            // Save original href and replace with javascript:void(0)
            link.dataset.originalHref = href
            link.setAttribute('href', 'javascript:void(0);')
            
            // Determine if this is a sidebar link
            const isSidebarLink = link.closest('.VPSidebar') !== null
            
            // Clear the link content
            link.innerHTML = ''
            
            // Add appropriate content based on whether it's a sidebar link
            if (isSidebarLink) {
              // For sidebar links, just add the text without icon
              link.innerHTML = `<span class="cross-section-text">${originalText}</span>`
            } else {
              // For content links, add text and icon
              link.innerHTML = `<span class="cross-section-text">${originalText}</span><span class="modal-icon" title="Opens in modal without changing navigation">⊕</span>`
            }
            
            // Add classes for styling
            link.classList.add('cross-section-link')
            
            // Add click event to open modal
            link.addEventListener('click', (e) => {
              e.preventDefault()
              
              // Create and open modal with iframe
              const modal = document.createElement('div')
              modal.className = 'modal-backdrop'
              modal.innerHTML = `
                <div class="modal-container">
                  <div class="modal-header">
                    <h3>${originalText || 'Documentation'}</h3>
                    <button class="close-button">×</button>
                  </div>
                  <div class="modal-content">
                    <iframe src="${link.dataset.originalHref}?iframe=true" class="modal-iframe" frameborder="0"></iframe>
                  </div>
                </div>
              `
              
              // Add close functionality
              modal.addEventListener('click', (e) => {
                if (e.target === modal) document.body.removeChild(modal)
              })
              
              const closeButton = modal.querySelector('.close-button')
              closeButton.addEventListener('click', () => {
                document.body.removeChild(modal)
              })
              
              // Add to DOM
              document.body.appendChild(modal)
            })
          }
        }
      })
    }
    
    const initZoom = () => {
      mediumZoom('.zoomable-img', { 
        background: 'rgba(0, 0, 0, 0.8)',
        margin: 24,
        scrollOffset: 40
      })
    }
    
    onMounted(() => {
      initZoom()
      processExternalLinks()
      processCrossSectionLinks()
    })
    
    // Re-apply zoom and process links when route changes
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom()
        processExternalLinks()
        processCrossSectionLinks()
      })
    )
  }
}