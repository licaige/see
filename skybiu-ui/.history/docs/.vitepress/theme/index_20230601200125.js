import Theme from 'vitepress/dist/client/theme-default/index.js'
// import TUI from '../../../packages/index'
import 'vitepress-theme-demoblock/theme/styles/index.css'

export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    app.use(TUI)
  },
}
