<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-backdrop" @click="close">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3>{{ title }}</h3>
            <button class="close-button" @click="close">×</button>
          </div>
          <div class="modal-content">
            <iframe v-if="url" :src="url" class="modal-iframe" frameborder="0"></iframe>
            <slot v-else></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Documentation'
    },
    url: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOpen = ref(props.modelValue)

    const close = () => {
      emit('update:modelValue', false)
    }

    watch(() => props.modelValue, (newVal) => {
      isOpen.value = newVal
    })

    return {
      isOpen,
      close
    }
  }
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
}

.modal-container {
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 1000px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--vp-c-text-2);
}

.modal-content {
  padding: 0;
  overflow: auto;
  flex: 1;
}

.modal-iframe {
  width: 100%;
  height: 80vh;
  border: none;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style> 