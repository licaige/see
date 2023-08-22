const { path } = require('@vuepress/utils');

const isProduction = process.env.NODE_ENV === 'production';
// 兼容 GitHub Pages 和 vercel 部署
const base = process.env.BUILD_ENV ? process.env.BUILD_ENV : '/';

module.exports = {
  base: base,
  dest: path.resolve(__dirname, './dist'),
  lang: 'zh-CN',
  title: 'soul-plus',
  description: 'Mobile UI Components built on Vue3',

  bundler: isProduction ? '@vuepress/webpack' : '@vuepress/vite',

  head: [
    [
      'meta',
      {
        name: 'keywords',
        content: 'soul,soul-plus,ui,vue3,components,jsdawn,青山依旧'
      }
    ],
    ['link', { rel: 'icon', href: base + 'logo_soul.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/highlight.js@11.2.0/styles/rainbow.css'
      }
    ]
  ],

  alias: {
    packages: path.resolve(__dirname, '../../packages')
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../examples')
      }
    ]
  ],

  themeConfig: {
    logo: '/logo_soul.png',
    repo: 'https://gitee.com/jsdawn/soul-plus.git',
    editLink: false,

    navbar: [
      { text: '指南', link: '/' },
      {
        text: '组件',
        link: '/components/basic/button',
        activeMatch: '/components/'
      },
      { text: '青山依旧', link: 'http://www.qscoding.com/' }
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          children: ['/README.md']
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          children: ['/components/basic/button.md', '/components/basic/cell.md']
        }
      ]
    }
  }
};
