import { createApp } from 'vue'
import App from './App.vue'
import ydesign from '@y-design/components'

const app = createApp(App)
app.use(ydesign)

app.mount('#app')
