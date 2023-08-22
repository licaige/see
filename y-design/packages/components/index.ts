import { App } from 'vue'
import YButton from './button'

export { YButton }

export * from './button'

export default {
  install(app: App): void {
    app.component(YButton.name, YButton)
  },
}
