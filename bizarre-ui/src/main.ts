import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/global.less'

import BizarreUI from '../packages'
// import { dateFormat, requestAnimationFrame, cancelAnimationFrame, rafTimeout, cancelRaf, throttle, debounce, add, downloadFile, moneyFormat } from '../packages'
// import BizarreUI from '../dist/vue-amazing-ui.js'
// import '../dist/style.css'
// import BizarreUI from 'vue-amazing-ui'
// import 'vue-amazing-ui/css'

const app = createApp(App)
// window.rafTimeout = rafTimeout // 挂载到window上，全局可用，无需引入

app.use(router)
app.use(BizarreUI)

app.mount('#app')
