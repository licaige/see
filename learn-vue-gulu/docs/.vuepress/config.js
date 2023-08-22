module.exports = {
  base: '/learn-vue-gulu/',
  title: 'Learn Vue Gulu',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/tab',
          '/components/popover',
          '/components/collapse'
        ]
      }
    ],
    nav: [
      {text: 'Github', link: 'https://github.com/ximuli/learn-vue-gulu'}
    ]
  }
}