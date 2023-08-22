import type { App, Plugin } from 'vue'

import PurgeIcon from './src/index.vue'
export { PurgeIcon }

import IconSvg from './src/IconSvg.vue'
export { IconSvg }

import Iconfont from './src/Iconfont.vue'
export { Iconfont }

import Iconify from './src/Iconify.vue'
export { Iconify }

const install = (app: App) => {
  app.component(PurgeIcon.name, PurgeIcon)
}

export default install as Plugin
