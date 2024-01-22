import { defineConfig } from 'vitepress';

export default defineConfig({
  base: 'https://minnoroth.github.io/3sb.cz/',
  title: '3SB',
  description: '3SB site',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
    ['meta', { name: 'theme-color', content: '#c12233' } ],
    [
      'script', {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'ASVYZNXZ',
        defer: '',
      }
    ]
  ],
  themeConfig: {
    logo: './3SB-logo.png',
    footer: {
      copyright: 'Copyright © 2024-present Michal Marek'
    },
    nav: [
      {
        text: 'Domů',
        link: '/'
      },
      {
        text: 'O nás',
        link: '/about/'
      },
      {
        text: 'Tréninky',
        link: '/training/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Kontakty',
        link: '/contact/'
      },
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/3sb_ultimate/' },
      { icon: 'facebook', link: 'https://www.facebook.com/3SBultimate' },
    ],
  },
});
