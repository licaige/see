import { defineConfig } from 'vitepress'

export default defineConfig({
  title: `Vue Bizarre UI`,
  description: 'Bizarre UI 组件库',
  base: '/bizarre-ui/',

  head: [ // 网站图标
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
    // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  ],
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  markdown: {
    lineNumbers: false // 是否显示行数，默认false
  },
  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/FyStrive/bizarre-ui/tree/master/docs/:path',
      text: 'Suggest changes to this page',
    },
    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FyStrive/bizarre-ui' },
    ],

    // search: { // vitepress 内置 search
    //   provider: 'local'
    // },

    algolia: { // algolia 搜索服务 与 内置 search 可二选一
      appId: 'Q8KCLYF15A',
      apiKey: '6a92e3780b1c1aeb173778f620f144b0',
      indexName: 'bizarre-ui',
      // insights: true, // Optional, automatically send insights when user interacts with search results
      // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###'
      // debug: false // Set debug to true if you want to inspect the modal
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    },

    nav: [
      { text: '组件', link: '/guide/features', activeMatch: '/guide/' },
      { text: '工具', link: '/utils/started', activeMatch: '/utils/' },
      {
        text: '链接',
        items: [
          { text: 'My Github', link: 'https://github.com/FyStrive' },
          { text: 'Front-end Notes', link: 'https://themusecatcher.github.io/front-end-notes/' },
          {
            items: [
              {
                text: 'vue',
                link: 'https://cn.vuejs.org/',
              },
              {
                text: 'markdown',
                link: 'https://markdown.com.cn/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '特性',
              link: '/guide/features'
            },
            {
              text: '快速上手',
              link: '/guide/started'
            }
          ]
        },
        {
          text: '组件',
          items: [
            {
              text: '警告提示 Alert',
              link: '/guide/components/alert'
            },
            {
              text: '面包屑 Breadcrumb',
              link: '/guide/components/breadcrumb'
            },
            {
              text: '按钮 Button',
              link: '/guide/components/button'
            },
            {
              text: '卡片 Card',
              link: '/guide/components/card'
            },
            {
              text: '走马灯 Carousel',
              link: '/guide/components/carousel'
            },
            {
              text: '级联选择 Cascader',
              link: '/guide/components/cascader'
            },
            {
              text: '多选框 Checkbox',
              link: '/guide/components/checkbox'
            },
            {
              text: '折叠面板 Collapse',
              link: '/guide/components/collapse'
            },
            {
              text: '倒计时 Countdown',
              link: '/guide/components/countdown'
            },
            {
              text: '日期选择 DatePicker',
              link: '/guide/components/datepicker'
            },
            {
              text: '描述列表 Descriptions',
              link: '/guide/components/descriptions'
            },
            {
              text: '对话框 Dialog',
              link: '/guide/components/dialog'
            },
            {
              text: '分割线 Divider',
              link: '/guide/components/divider'
            },
            {
              text: '抽屉 Drawer',
              link: '/guide/components/drawer'
            },
            {
              text: '空状态 Empty',
              link: '/guide/components/empty'
            },
            {
              text: '栅格 Grid',
              link: '/guide/components/grid'
            },
            {
              text: '图片 Image',
              link: '/guide/components/image'
            },
            {
              text: '输入框 Input',
              link: '/guide/components/input'
            },
            {
              text: '数字输入框 InputNumber',
              link: '/guide/components/inputnumber'
            },
            {
              text: '全局提示 Message',
              link: '/guide/components/message'
            },
            {
              text: '信息提示 Modal',
              link: '/guide/components/modal'
            },
            {
              text: '通知提醒框 Notification',
              link: '/guide/components/notification'
            },
            {
              text: '分页 Pagination',
              link: '/guide/components/pagination'
            },
            {
              text: '进度条 Progress',
              link: '/guide/components/progress'
            },
            {
              text: '二维码 QRCode',
              link: '/guide/components/qrcode'
            },
            {
              text: '单选框 Radio',
              link: '/guide/components/radio'
            },
            {
              text: '评分 Rate',
              link: '/guide/components/rate'
            },
            {
              text: '结果 Result',
              link: '/guide/components/result'
            },
            {
              text: '选择器 Select',
              link: '/guide/components/select'
            },
            {
              text: '滑动输入条 Slider',
              link: '/guide/components/slider'
            },
            {
              text: '间距 Space',
              link: '/guide/components/space'
            },
            {
              text: '加载中 Spin',
              link: '/guide/components/spin'
            },
            {
              text: '统计数值 Statistic',
              link: '/guide/components/statistic'
            },
            {
              text: '步骤条 Steps',
              link: '/guide/components/steps'
            },
            {
              text: '触摸滑动插件 Swiper',
              link: '/guide/components/swiper'
            },
            {
              text: '开关 Switch',
              link: '/guide/components/switch'
            },
            {
              text: '表格 Table',
              link: '/guide/components/table'
            },
            {
              text: '标签页 Tabs',
              link: '/guide/components/tabs'
            },
            {
              text: '标签 Tag',
              link: '/guide/components/tag'
            },
            {
              text: '文本域 Textarea',
              link: '/guide/components/textarea'
            },
            {
              text: '文字滚动 TextScroll',
              link: '/guide/components/textscroll'
            },
            {
              text: '时间轴 Timeline',
              link: '/guide/components/timeline'
            },
            {
              text: '文字提示 Tooltip',
              link: '/guide/components/tooltip'
            },
            {
              text: '上传 Upload',
              link: '/guide/components/upload'
            },
            {
              text: '播放器 Video',
              link: '/guide/components/video'
            },
            {
              text: '瀑布流 Waterfall',
              link: '/guide/components/waterfall'
            }
          ]
        }
      ],
      '/utils/': [
        {
          text: '指引',
          items: [
            {
              text: '快速上手',
              link: '/utils/started'
            }
          ]
        },
        {
          text: '工具',
          items: [
            {
              text: 'add 加法',
              link: '/utils/add'
            },
            {
              text: 'raf 动画帧',
              link: '/utils/animation-frame'
            },
            {
              text: 'date 日期格式化',
              link: '/utils/date-format'
            },
            {
              text: 'debounce 防抖',
              link: '/utils/debounce'
            },
            {
              text: 'downloadFile 下载文件',
              link: '/utils/download-file'
            },
            {
              text: 'moneyFormat 金额格式化',
              link: '/utils/money-format'
            },
            {
              text: 'raf 定时器',
              link: '/utils/raf-timeout'
            },
            {
              text: 'throttle 节流',
              link: '/utils/throttle'
            }
          ]
        }
      ]
    }
  }
})
