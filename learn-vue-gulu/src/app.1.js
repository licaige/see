import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Layout from './layout'
import Toast from './toast'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'

// 使用插件
import plugin from './plugin'
Vue.use(plugin)

// 注册全局组件
Vue.component('l-button', Button)
Vue.component('l-icon', Icon)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-input', Input)
Vue.component('l-row', Row)
Vue.component('l-col', Col)
Vue.component('l-header', Header)
Vue.component('l-content', Content)
Vue.component('l-footer', Footer)
Vue.component('l-sider', Sider)
Vue.component('l-layout', Layout)
Vue.component('l-toast', Toast)
Vue.component('l-tabs', Tabs)
Vue.component('l-tabs-head', TabsHead)
Vue.component('l-tabs-item', TabsItem)
Vue.component('l-tabs-body', TabsBody)
Vue.component('l-tabs-pane', TabsPane)
Vue.component('l-popover', Popover)
Vue.component('l-collapse', Collapse)
Vue.component('l-collapse-item', CollapseItem)
Vue.component('l-cascader', Cascader)


new Vue({
  el: '#app',
  data: {
    source: [
      {
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              { name: '上城' },
              { name: '下城' },
              { name: '江干' }
            ]
          },
          {
            name: '嘉兴',
            children: [
              { name: '南湖' },
              { name: '秀洲' },
              { name: '嘉善' }
            ]
          }
        ]
      },
      {
        name: '福建',
        children: [
          {
            name: '福州',
            children: [
              { name: '一二' },
              { name: '三四' },
              { name: '五六' }
            ]
          },
          {
            name: '233',
            children: [
              { name: '七八' },
              { name: '九十' }
            ]
          }
        ]
      }
    ],
    selectedTab: ['2', '1'],
    loading1: true,
    loading2: false,
    msg: 'Hello, world!'
  },
  created() { },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`您的智商余额为${parseInt(Math.random() * 100)}，请充值`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '知道啦',
          callback(toast) { // toast 是从toast组件中传过来的
            toast.log()
            console.log('用户说他知道了')
          }
        }
      })
    }
  }
})