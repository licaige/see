import Dong from './src/dong'
import { App } from 'vue'

Dong.install = (app: App): void => {
  // 注册组件
  app.component(Dong.name, Dong)
}

export default Dong
