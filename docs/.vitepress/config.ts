import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "C++ Programming Guide",
  description: "Learn C++ programming from basics to advanced concepts",
  base: '/cpp/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fundamentals', link: '/fundamentals/cpp' },
      { text: 'Syntax', link: '/syntax/basics' }
    ],
    sidebar: {
      '/fundamentals/': [
        {
          text: 'Fundamentals',
          items: [
            { text: 'C++ Introduction', link: '/fundamentals/cpp' },
            { text: 'Build and Run', link: '/fundamentals/build_and_run' },
            { text: 'Build Automation', link: '/fundamentals/build_automation' },
            { text: 'From Variable to Binary', link: '/fundamentals/from_variable_to_binary' }
          ]
        }
      ],
      '/syntax/': [
        {
          text: 'Syntax',
          items: [
            { text: 'Basics', link: '/syntax/basics' },
            { text: 'Variables', link: '/syntax/variables' },
            { text: 'Control Structures', link: '/syntax/control-structures' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/semper-codicem/cpp' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    }
  }
})