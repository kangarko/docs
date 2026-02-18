// .vitepress/config.js
export default {
  title: 'MineAcademy Docs',
  description: 'Documentation for MineAcademy software',
  base: process.env.BASE_URL || '/',
  markdown: {
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    }
  },
  themeConfig: {
    logo: {
      light: '/images/icon-gray.png',
      dark: '/images/icon-white.png'
    },
    siteTitle: 'MineAcademy Docs',
    nav: [
      {
        text: 'General',
        link: '/general/installation'
      },
      {
        text: 'Plugins',
        items: [
          { text: 'ChatControl', link: '/chatcontrol/' },
          { text: 'Boss', link: '/boss/' },
          { text: 'CoreArena', link: '/corearena/' },
          { text: 'Protect', link: '/protect/' },
          { text: 'Winter', link: '/winter/' }
        ]
      },
    ],
    search: {
      provider: 'local',
      options: {
        placement: 'right',
        translations: {
          button: {
            buttonText: 'Search docs',
            buttonAriaLabel: 'Search documentation'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search query',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    sidebar: {      
      '/general/': [
        {
          text: 'Common Guides',
          items: [
            { text: 'Compatibility', link: '/general/compatibility' },
            { text: 'Installation', link: '/general/installation' },
            { text: 'Localization', link: '/general/localization' },
            { text: 'Useful Resources', link: '/general/useful-links' },
          ]
        },
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Getting Help', link: '/general/getting-help' },
            { text: 'Use Right Encoding', link: '/general/use-right-encoding' },
          ]
        }
      ],
      '/chatcontrol/': [
        {
          text: 'About',
          items: [
            { text: 'What is ChatControl', link: '/chatcontrol/' },
            { text: 'Terms of Service', link: '/chatcontrol/terms' },           
          ]
        },
        {
          text: 'Installation',
          items: [
            { text: 'Compatibility', link: '/chatcontrol/compatibility' },
            { text: 'Installation', link: '/general/installation' },
            { text: 'Upgrading', link: '/chatcontrol/upgrading' }, 
            { text: 'Proxy', link: '/chatcontrol/proxy' },
            { text: 'Discord', link: '/chatcontrol/discord' },
          ]
        },
        {
          text: 'Basics',
          items: [
            { text: 'Commands', link: '/chatcontrol/commands' },
            { text: 'Configuration', link: '/chatcontrol/configuration' },
            { text: 'Permissions', link: '/chatcontrol/permissions' },
            { text: 'Localization', link: '/general/localization' },
          ]
        },
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Common Issues', link: '/chatcontrol/common-issues' },
            { text: 'Listener Priorities', link: '/chatcontrol/listener-priorities' },
            { text: 'JAR Hell', link: '/chatcontrol/jar-hell' },
            { text: 'Getting Help', link: '/general/getting-help' },
            { text: 'Use Right Encoding', link: '/general/use-right-encoding' },
            { text: 'Useful Resources', link: '/general/useful-links' },
          ]
        },
        {
          text: 'Learn',
          items: [
            { text: 'Channels', link: '/chatcontrol/channels' },
            { text: 'Formats', link: '/chatcontrol/formats' },
            { text: 'Rules', link: '/chatcontrol/rules' },
            { text: 'Groups', link: '/chatcontrol/groups' },
            { text: 'Messages', link: '/chatcontrol/messages' },
            { text: 'Variables', link: '/chatcontrol/variables' },
            { text: 'JavaScript Variables', link: '/chatcontrol/javascript-variables' },
            { text: 'Custom JavaScript', link: '/chatcontrol/custom-javascript' },
            { text: 'Logs', link: '/chatcontrol/logs' },
            { text: 'Spying', link: '/chatcontrol/spy' },
            { text: 'Books', link: '/chatcontrol/books' }
          ]
        },
        {
          text: 'Tweak',
          items: [
            { text: 'Performance', link: '/chatcontrol/performance' },
            { text: 'Chat Bots', link: '/chatcontrol/chat-bots' },
            { text: 'Sound Notify', link: '/chatcontrol/sound-notify' },
            { text: 'Newcomer', link: '/chatcontrol/newcomer' },
            { text: 'Alternative Messages', link: '/chatcontrol/alternative-messages' },
            { text: 'Custom Commands', link: '/chatcontrol/custom-commands' },
            { text: 'JSON', link: '/chatcontrol/JSON' },
            { text: 'Soft Mute', link: '/chatcontrol/soft-mute' },
            { text: 'Custom Tab Completion', link: '/chatcontrol/custom-tab-completion' },
            { text: 'Conflicting Commands', link: '/chatcontrol/conflicting-commands' }
          ]
        },
        {
          text: 'Developer',
          items: [
            { text: 'API', link: '/chatcontrol/API' }
          ]
        },
      ],      
      '/boss/': [
        {
          text: 'About',
          items: [
            { text: 'What is Boss', link: '/boss/' },
            
          ]
        },   
        {
          text: 'Installation',
          items: [
            { text: 'Compatibility', link: '/boss/compatibility' },
            { text: 'Installation', link: '/general/installation' },
          ]
        },     
        {
          text: 'Basics',
          items: [
            { text: 'Commands', link: '/boss/commands' },
            { text: 'Configuration', link: '/boss/configuration' },
            { text: 'Permissions', link: '/boss/permissions' },
            { text: 'Localization', link: '/general/localization' },
          ]
        },     
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Common Issues', link: '/boss/common-issues' },
            { text: 'Getting Help', link: '/general/getting-help' },
            { text: 'Use Right Encoding', link: '/general/use-right-encoding' },
            { text: 'Useful Resources', link: '/general/useful-links' },
          ]
        },
        {
          text: 'Learn',
          items: [
            { text: 'Customizing Bosses', link: '/boss/customizing-bosses' },
            { text: 'Skills', link: '/boss/skills' },
            { text: 'Boss Spawning', link: '/boss/natural-spawning' },
            { text: 'Boss Commands', link: '/boss/boss-commands' },
            { text: 'Drops', link: '/boss/drops' },
            { text: 'Spawning Limits', link: '/boss/spawning-limits' },
            { text: 'Variables', link: '/boss/variables' }
          ]
        },
        {
          text: 'Developer',
          items: [
            { text: 'API', link: '/boss/api' },
          ]
        }
      ],
      '/corearena/': [
        {
          text: 'About',
          items: [
            { text: 'What is CoreArena', link: '/corearena/' }
          ]
        },
        {
          text: 'Installation',
          items: [
            { text: 'Compatibility', link: '/corearena/compatibility' },
            { text: 'Installation', link: '/general/installation' },
          ]
        },
        {
          text: 'Basics',
          items: [
            { text: 'Commands', link: '/corearena/commands' },
            { text: 'Configuration', link: '/corearena/configuration' },
            { text: 'Permissions', link: '/corearena/permissions' },
            { text: 'Localization', link: '/general/localization' },
          ]
        },  
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Common Issues', link: '/corearena/common-issues' },
            { text: 'Getting Help', link: '/general/getting-help' },
            { text: 'Use Right Encoding', link: '/general/use-right-encoding' },
            { text: 'Useful Resources', link: '/general/useful-links' },
          ]
        },
        {
          text: 'Learn',
          items: [
            { text: 'Physical Engine', link: '/corearena/physical-engine' },
            { text: 'Sign System', link: '/corearena/signs' },
            { text: 'Chest Refill', link: '/corearena/chest-refill' },
            { text: 'PlaceholderAPI', link: '/corearena/placeholderapi' },
          ]
        }
      ],
      '/protect/': [
        {
          text: 'About',
          items: [
            { text: 'What is Protect', link: '/protect/' },
            { text: 'Confiscate vs Protect', link: '/protect/Confiscate-vs-Protect' },
          ]
        },
        {
          text: 'Installation',
          items: [
            { text: 'Compatibility', link: '/protect/compatibility' },
            { text: 'Installation', link: '/general/installation' },
          ]
        },  
        {
          text: 'Basics',
          items: [
            { text: 'Commands', link: '/protect/commands' },
            { text: 'Configuration', link: '/protect/configuration' },
            { text: 'Permissions', link: '/protect/permissions' },
            { text: 'Localization', link: '/general/localization' },
          ]
        },  
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Common Issues', link: '/protect/common-issues' },
            { text: 'Getting Help', link: '/general/getting-help' },
            { text: 'Use Right Encoding', link: '/general/use-right-encoding' },
            { text: 'Useful Resources', link: '/general/useful-links' },
          ]
        },
        {
          text: 'Learn',
          items: [
            { text: 'Rules', link: '/protect/rules' },
            { text: 'Groups', link: '/protect/groups' },
            { text: 'Silent Confiscating', link: '/protect/silent-confiscating' },
            { text: 'Variables', link: '/protect/variables' },
          ]
        },
        {
          text: 'Developer',
          items: [
            { text: 'API', link: '/protect/API' },
          ]
        },
      ],
      '/winter/': [
        {
          text: 'About',
          items: [
            { text: 'What is Winter', link: '/winter/' },
          ]
        },
        {
          text: 'Installation',
          items: [
            { text: 'Compatibility', link: '/winter/compatibility' },
            { text: 'Installation', link: '/general/installation' },
          ]
        }, 
        {
          text: 'Basics',
          items: [
            { text: 'Commands', link: '/winter/commands' },
            { text: 'Configuration', link: '/winter/configuration' },
            { text: 'Permissions', link: '/winter/permissions' },
            { text: 'Localization', link: '/general/localization' },
          ]
        },    
        {
          text: 'Troubleshooting',
          items: [
            { text: 'Getting Help', link: '/general/getting-help' },
            { text: 'Use Right Encoding', link: '/general/use-right-encoding' },
            { text: 'Useful Resources', link: '/general/useful-links' },
          ]
        },
        {
          text: 'Learn',
          items: [
            { text: 'Chests', link: '/winter/chests' },
          ]
        }
      ],

    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kangarko/docs' },
      { icon: 'discord', link: 'https://mineacademy.org/discord' },
      { icon: 'youtube', link: 'https://youtube.com/kangarko' }
    ],
    footer: {
      message: 'Visit our full website at <a href="https://mineacademy.org">mineacademy.org</a>',
      copyright: `Copyright © ${new Date().getFullYear()} MineAcademy`
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/logo-white.png' }],
    ['meta', { name: 'theme-color', content: '#3C82F6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  appearance: true
}
