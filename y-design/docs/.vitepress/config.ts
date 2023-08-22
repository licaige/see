import sidebar from './sidebar'
import nav from './nav'

export default {
  base: '/y-design/',
  title: 'YDesign',
  lang: 'zh-CN',
  description: '组件库',
  head: [['link', { rel: 'icon', href: '/favicon.ico', type: 'image/ico' }]],
  lastUpdated: true,
  cleanUrls: true, //允许从URL中删除后面的“.html”，生成干净的目录结构
  themeConfig: {
    logo: '/favicon.ico',
    search: {
      provider: 'local',
    },
    // algolia: {
    //   appId: '7H67QR5P0A',
    //   apiKey: 'deaab78bcdfe96b599497d25acc6460e',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:cn'],
    //   },
    // },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/yd-coder/y-design',
      },
    ],
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present yd-coder',
    },
    nav,
    sidebar,
  },
}
