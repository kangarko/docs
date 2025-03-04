<template>
  <a
    v-if="isCrossSectionLink"
    href="javascript:void(0);"
    @click="openModal"
    class="cross-section-link"
  >
    <slot></slot><span v-if="!isInSidebar" class="modal-icon" title="Opens in modal">⊕</span>
  </a>
  <a v-else :href="href">
    <slot></slot>
  </a>

  <Modal
    v-model="showModal"
    :title="linkTitle"
    :url="getFullPath(href)"
  />
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import Modal from './Modal.vue'

export default {
  name: 'CrossSectionLink',
  components: {
    Modal
  },
  props: {
    href: {
      type: String,
      required: true
    },
    modalTitle: {
      type: String,
      default: ''
    },
    forceModal: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const route = useRoute()
    const { site, theme } = useData()
    const showModal = ref(false)
    const linkTitle = ref(props.modalTitle || site.value.title || 'Documentation')
    const isInSidebar = ref(false)
    
    // Get the current section from the path (e.g., '/chatcontrol/' from '/chatcontrol/commands')
    const currentSection = computed(() => {
      const parts = route.path.split('/')
      return parts.length > 1 ? `/${parts[1]}/` : '/'
    })

    // Check if the link is to a different section
    const isCrossSectionLink = computed(() => {
      if (props.forceModal) return true
      
      // If it's an external link, not a cross-section link
      if (props.href.startsWith('http') || props.href.startsWith('//')) {
        return false
      }

      // If the link doesn't start with a slash, it's a relative link
      if (!props.href.startsWith('/')) {
        return false
      }

      // Extract the section from the href
      const parts = props.href.split('/')
      const linkSection = parts.length > 1 ? `/${parts[1]}/` : '/'
      
      // It's a cross-section link if the sections differ
      return linkSection !== currentSection.value && linkSection !== '/'
    })

    // Try to get the link text from the slot content
    onMounted(() => {
      // Check if we're in sidebar
      setTimeout(() => {
        try {
          const element = document.querySelector('.cross-section-link')
          if (element) {
            isInSidebar.value = !!element.closest('.VPSidebar')
          }
        } catch (e) {
          console.error('Error checking sidebar:', e)
        }
      }, 0)
      
      // Wait until component is mounted to get link text
      setTimeout(() => {
        try {
          // Get the text content excluding the ⊕ icon
          const slotContent = document.querySelector('.cross-section-link')?.textContent || ''
          if (slotContent && !props.modalTitle) {
            // Remove the ⊕ character if present
            const cleanText = slotContent.replace('⊕', '').trim()
            if (cleanText) {
              linkTitle.value = cleanText
            }
          }
        } catch (e) {
          console.error('Error getting link text:', e)
        }
      }, 0)
    })

    // Get the full path for the iframe
    const getFullPath = (path) => {
      // If it's an external link, return as is
      if (path.startsWith('http') || path.startsWith('//')) {
        return path
      }
      
      // For internal links, append the base URL and iframe flag
      const base = site.value.base
      const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
      const cleanPath = path.startsWith('/') ? path : `/${path}`
      
      // Add a special parameter to indicate this is an iframe view
      const separator = cleanPath.includes('?') ? '&' : '?'
      return `${cleanBase}${cleanPath}${separator}iframe=true`
    }

    const openModal = () => {
      showModal.value = true
    }

    return {
      isCrossSectionLink,
      showModal,
      openModal,
      getFullPath,
      linkTitle,
      isInSidebar
    }
  }
}
</script>

<style>
.cross-section-link {
  position: relative;
  text-decoration: none;
  white-space: nowrap;
}

.modal-icon {
  display: inline-block;
  font-size: 0.75em;
  margin-left: 2px;
  vertical-align: super;
  color: var(--vp-c-brand);
  opacity: 0.7;
}

.cross-section-link:hover .modal-icon {
  opacity: 1;
}
</style> 