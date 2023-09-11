import YggDemoUi from './src/ygg-demo-ui.vue'
import { App } from 'vue'

YggDemoUi.name = 'yyg-ygg-demo-ui'

YggDemoUi.install = (app: App): void => {
  // 注册组件
  app.component(YggDemoUi.name, YggDemoUi)
}

export default YggDemoUi
