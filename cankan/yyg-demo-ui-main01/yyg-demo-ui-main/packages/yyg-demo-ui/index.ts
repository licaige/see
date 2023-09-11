import { App } from 'vue'
import Foo from '@yyg-demo-ui/foo'
import Dong from '@yyg-demo-ui/dong'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  Dong
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
