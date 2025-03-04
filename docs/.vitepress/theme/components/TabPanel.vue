<template>
  <div
    class="tab-panel"
    :class="{ active: isActive }"
  >
    <slot v-if="isActive"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabPanel',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  inject: ['tabs'],
  computed: {
    isActive() {
      const index = this.tabs.tabs.findIndex(tab => tab.title === this.title)
      return this.tabs.activeTab === index
    }
  }
}
</script>

<style>
.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}
</style> 