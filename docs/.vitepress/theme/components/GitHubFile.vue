<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  repo: String,
  path: String,
  branch: {
    type: String,
    default: 'master'
  },
  language: {
    type: String,
    default: 'java'
  },
  title: {
    type: String,
    default: ''
  },
  parsePermissions: {
    type: Boolean,
    default: false
  }
})

const fileContent = ref('')
const isLoading = ref(true)
const hasError = ref(false)
const errorMessage = ref('')
const parsedPermissions = ref([])

// Parse the Java Permissions file into a structured format
const parsePermissionsFile = (content) => {
  const permissions = []
  
  // Extract all permission strings using regex
  const permRegex = /@Permission(?:\((?:value\s*=\s*)?)?(["'])(.+?)\1(?:,\s*def\s*=\s*(true|false))?[^;]*[\r\n]+[^"]*?(?:String|public static final String)\s+(\w+)\s*=\s*(["'])(.+?)\5/g
  
  // Get all matches from the content
  let allPermissions = []
  let match
  
  // Create a copy of the content with normalized line endings
  const normalizedContent = content.replace(/\r\n/g, '\n')
  
  // First, collect all permissions
  while ((match = permRegex.exec(normalizedContent)) !== null) {
    const description = match[2]
    const defaultValue = match[3] === 'true'
    const fieldName = match[4]
    const permissionName = match[6]
    
    allPermissions.push({
      name: permissionName,
      description: description,
      defaultValue: defaultValue,
      fieldName: fieldName
    })
  }
  
  // Find permission groups
  const groupRegex = /@PermissionGroup\((["'])(.+?)\1\)[\r\n\s]*(?:public\s+)?(?:static\s+)?(?:final\s+)?class\s+(\w+)/g
  let groups = []
  
  while ((match = groupRegex.exec(normalizedContent)) !== null) {
    const description = match[2]
    const className = match[3]
    
    groups.push({
      name: className,
      description: description,
      permissions: []
    })
  }
  
  // Also extract inner classes as subgroups
  const innerClassRegex = /class\s+(\w+)\s+\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g
  
  // For each permission, determine which group it belongs to
  for (const perm of allPermissions) {
    // Check if we can find the permission's field within a class definition
    let foundGroup = false
    
    for (const group of groups) {
      const classContentRegex = new RegExp(`class\\s+${group.name}\\s+\\{([^{}]*(?:\\{[^{}]*\\}[^{}]*)*)\\}`, 's')
      const classMatch = classContentRegex.exec(normalizedContent)
      
      if (classMatch && classMatch[1].includes(perm.fieldName)) {
        group.permissions.push(perm)
        foundGroup = true
        break
      }
    }
    
    // If not found in any group, add to a general group
    if (!foundGroup) {
      if (!permissions.find(g => g.name === 'General')) {
        permissions.push({
          name: 'General',
          description: 'General permissions',
          permissions: []
        })
      }
      
      permissions.find(g => g.name === 'General').permissions.push(perm)
    }
  }
  
  // Add all populated groups to the permissions array
  for (const group of groups) {
    if (group.permissions.length > 0) {
      permissions.push(group)
    }
  }
  
  // Fallback - if our regex approach missed permissions, use a simple line-by-line scan
  if (allPermissions.length === 0) {
    const lines = normalizedContent.split('\n')
    let currentGroup = null
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      // Look for permission group definitions
      if (line.startsWith('@PermissionGroup')) {
        const groupMatch = line.match(/@PermissionGroup\((["'])(.+?)\1\)/)
        if (groupMatch) {
          // Look for the class declaration that follows
          for (let j = i + 1; j < i + 5 && j < lines.length; j++) {
            const classLine = lines[j].trim()
            const classMatch = classLine.match(/class\s+(\w+)/)
            if (classMatch) {
              currentGroup = {
                name: classMatch[1],
                description: groupMatch[2],
                permissions: []
              }
              permissions.push(currentGroup)
              break
            }
          }
        }
      }
      
      // Look for individual permissions
      if (line.startsWith('@Permission')) {
        const permMatch = line.match(/@Permission(?:\((?:value\s*=\s*)?)?(["'])(.+?)\1/)
        const defaultValue = line.includes('def = true')
        
        if (permMatch) {
          // Look for the String declaration that follows
          for (let j = i + 1; j < i + 5 && j < lines.length; j++) {
            const stringLine = lines[j].trim()
            const stringMatch = stringLine.match(/String\s+(\w+)\s*=\s*(["'])(.+?)\2/)
            
            if (stringMatch) {
              const perm = {
                name: stringMatch[3],
                description: permMatch[2],
                defaultValue: defaultValue,
                fieldName: stringMatch[1]
              }
              
              if (currentGroup) {
                currentGroup.permissions.push(perm)
              } else {
                if (!permissions.find(g => g.name === 'General')) {
                  permissions.push({
                    name: 'General',
                    description: 'General permissions',
                    permissions: []
                  })
                }
                permissions.find(g => g.name === 'General').permissions.push(perm)
              }
              break
            }
          }
        }
      }
    }
  }
  
  // Sort permissions by name within each group
  for (const group of permissions) {
    group.permissions.sort((a, b) => a.name.localeCompare(b.name))
    
    // Filter out duplicates
    group.permissions = group.permissions.filter((perm, index, self) => 
      index === self.findIndex(p => p.name === perm.name)
    )
  }
  
  // Sort groups alphabetically except General should be last
  permissions.sort((a, b) => {
    if (a.name === 'General') return 1
    if (b.name === 'General') return -1
    return a.name.localeCompare(b.name)
  })
  
  return permissions.filter(group => group.permissions.length > 0)
}

onMounted(async () => {
  try {
    // Construct the raw GitHub URL for direct content
    const url = `https://raw.githubusercontent.com/${props.repo}/${props.branch}/${props.path}`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}: ${response.statusText}`)
    }
    
    const content = await response.text()
    fileContent.value = content
    
    // Parse the file if parsePermissions is true
    if (props.parsePermissions) {
      parsedPermissions.value = parsePermissionsFile(content)
    }
  } catch (error) {
    console.error('Failed to fetch file from GitHub:', error)
    hasError.value = true
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
})

// Helper function to format permission name
const formatPermissionName = (name) => {
  if (name.endsWith('.')) {
    return `${name}*`
  }
  return name
}
</script>

<template>
  <div class="github-file-component">
    <div v-if="title" class="github-file-title">
      {{ title }}
      <a :href="`https://github.com/${repo}/blob/${branch}/${path}`" target="_blank" rel="noopener noreferrer" 
         class="github-link" title="View on GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>
    <div v-if="isLoading" class="github-file-loading">
      Loading file from GitHub...
    </div>
    <div v-else-if="hasError" class="github-file-error">
      <p>Failed to load file from GitHub.</p>
      <p class="error-details">{{ errorMessage }}</p>
    </div>
    <div v-else-if="parsePermissions" class="github-file-content formatted-permissions">
      <div class="file-header">
        <span class="file-path">{{ path }}</span>
        <a :href="`https://github.com/${repo}/blob/${branch}/${path}`" target="_blank" rel="noopener noreferrer" 
           class="view-raw-link">View Raw</a>
      </div>
      <div class="parsed-permissions">
        <div v-if="parsedPermissions.length === 0" class="no-permissions">
          <p>No permissions found in this file.</p>
        </div>
        
        <div v-for="(group, groupIndex) in parsedPermissions" :key="groupIndex" class="perm-group">
          <h3 :id="group.name.toLowerCase().replace(/\./g, '-')">{{ group.name }}</h3>
          <div class="group-description">{{ group.description }}</div>
          
          <ul class="permissions-list">
            <li v-for="(permission, permIndex) in group.permissions" :key="`${groupIndex}-${permIndex}`" class="perm-item">
              <code class="perm-name">{{ formatPermissionName(permission.name) }}</code>
              <span v-if="permission.defaultValue" class="default-badge">Default</span>
              <span class="perm-description">{{ permission.description }}</span>
            </li>
          </ul>
          
          <div v-if="group.permissions.length === 0" class="no-permissions">
            <p>No permissions found in this group.</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="github-file-content">
      <div class="file-header">
        <span class="file-path">{{ path }}</span>
        <a :href="`https://github.com/${repo}/blob/${branch}/${path}`" target="_blank" rel="noopener noreferrer" 
           class="view-raw-link">View Raw</a>
      </div>
      <pre><code :class="'language-' + language">{{ fileContent }}</code></pre>
    </div>
  </div>
</template>

<style>
.github-file-component {
  margin: 1.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.github-file-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-bg-soft);
  font-weight: 600;
  border-bottom: 1px solid var(--vp-c-divider);
}

.github-link {
  display: flex;
  align-items: center;
}

.github-link svg {
  fill: var(--vp-c-text-2);
  transition: fill 0.2s;
}

.github-link:hover svg {
  fill: var(--vp-c-brand);
}

.file-header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-bg-soft);
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
}

.file-path {
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.view-raw-link {
  color: var(--vp-c-brand);
  font-size: 0.875rem;
  text-decoration: none;
  margin-left: 1rem;
}

.view-raw-link:hover {
  text-decoration: underline;
}

.github-file-loading,
.github-file-error {
  padding: 1.5rem;
  color: var(--vp-c-text-2);
  text-align: center;
}

.github-file-error {
  color: var(--vp-c-danger);
}

.error-details {
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.github-file-content pre {
  margin: 0;
  border-radius: 0;
}

/* Improve code display */
.github-file-content code {
  font-size: 0.9rem;
  padding: 1rem;
  line-height: 1.5;
  tab-size: 4;
}

/* Formatted permissions styles */
.parsed-permissions {
  padding: 1rem;
}

.perm-group {
  margin-bottom: 2rem;
}

.perm-group h3 {
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand);
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.group-description {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.permissions-list {
  padding-left: 0;
  list-style-type: none;
}

.perm-item {
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.perm-name {
  font-weight: bold;
  margin-right: 0.5rem;
  color: var(--vp-c-brand-dark);
}

.default-badge {
  display: inline-block;
  background-color: var(--vp-c-green);
  color: white;
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  border-radius: 0.25rem;
  margin: 0 0.5rem;
  vertical-align: middle;
}

.perm-description {
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
}

.no-permissions {
  color: var(--vp-c-text-2);
  font-style: italic;
  margin-top: 0.5rem;
}

/* Dark mode adjustments */
.dark .github-file-component {
  border-color: var(--vp-c-divider);
}

.dark .file-header,
.dark .github-file-title {
  background-color: var(--vp-c-bg-soft);
}

.formatted-permissions {
  overflow-y: auto;
}
</style> 