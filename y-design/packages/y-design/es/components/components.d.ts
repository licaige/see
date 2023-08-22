import * as components from './index'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    YButton: typeof components.YButton
  }
}
export {}
