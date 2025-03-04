<template>
  <div class="tabs">
    <div class="tabs-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-button"
        :class="{ active: activeTab === index }"
        @click="setActiveTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tabs-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      activeTab: 0,
      tabs: []
    }
  },
  mounted() {
    this.tabs = this.$slots.default()
      .filter(node => node.type.name === 'TabPanel')
      .map(node => {
        return {
          title: node.props.title
        }
      })
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index
    }
  },
  provide() {
    return {
      tabs: this
    }
  }
}
</script>

<style>
.tabs {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.tabs-header {
  display: flex;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.tab-button {
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-right: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
  transition: background-color 0.2s, color 0.2s;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* Dark mode specific styling for better contrast */
.dark .tab-button {
  background-color: var(--vp-c-bg-alt);
  border-right: 1px solid var(--vp-c-divider-dark);
}

.tab-button:last-child {
  border-right: none;
}

.tab-button:hover {
  background-color: var(--vp-c-gray-light-4);
}

.dark .tab-button:hover {
  background-color: var(--vp-c-bg-soft);
}

.tab-button.active {
  background-color: var(--vp-c-brand);
  color: white;
}

.tabs-body {
  padding: 1rem;
  background-color: var(--vp-c-bg);
}
</style> 