import Vue from 'vue'

/* button组件 */
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

/* input组件 */
import Input from './input'

/* 网格组件 */
import Row from './row'
import Col from './col'

/* layout布局组件 */
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'


/* toast组件 */
import Toast from './toast'
import MyPlugin from './common/plugin' 
Vue.use(MyPlugin)


/* tabs组件 */
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'


/* popover组件 */
import Popover from './popover'


/* collapse组件 */
import Collapse from './collapse'
import CollapseItem from './collapse-item'


Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)

Vue.component('e-input', Input)

Vue.component('e-row', Row)
Vue.component('e-col', Col)

Vue.component('e-layout', Layout)
Vue.component('e-header', Header)
Vue.component('e-content', Content)
Vue.component('e-footer', Footer)
Vue.component('e-sider', Sider)

Vue.component('e-toast', Toast)

Vue.component('e-tabs', Tabs)
Vue.component('e-tabs-head', TabsHead)
Vue.component('e-tabs-body', TabsBody)
Vue.component('e-tabs-item', TabsItem)
Vue.component('e-tabs-pane', TabsPane)

Vue.component('e-popover', Popover)


Vue.component('e-collapse', Collapse)
Vue.component('e-collapse-item', CollapseItem)



new Vue({
  el: '#app',

  data: {
    selectedTab: 'sports',    // tabs组件默认绑定值

    selectedTab2: ['1']  // collapse组件默认绑定值
  },

  methods: {  


    // Input组件的change事件
    inputChange(e) {
      console.log('新值是', e.target.value)
    },

    // toast组件触发事件
    showToast(position) {
      this.$toast(`当前随机数为 ${parseInt(Math.random() * 100) }`, {
        closeButton: {
          text: '知道了',
          callback() { alert('执行了关闭回调') }       
        },
        enableHtml: false,
        autoClose: 3,
          
        position
      })
      
    },
    showToast1(){ this.showToast('top') },
    showToast2(){ this.showToast('middle') },
    showToast3(){ this.showToast('bottom') },

  }

})



