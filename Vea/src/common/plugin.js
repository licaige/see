
import Toast from '../toast'

const MyPlugin = {}

let currentToast


MyPlugin.install = function (Vue, options) {
  
  // 添加实例方法
  Vue.prototype.$toast = function (message, toastOptions) {
    if (currentToast) {
      currentToast.close()
      currentToast = null  // 手动释放currentToast
    }

    currentToast = createToast(Vue, message, toastOptions)

  }
}


function createToast(Vue, message, toastOptions) {
  let Constructor = Vue.extend(Toast)  // 生成 创建组件子类实例 的构造器
  let toast = new Constructor({
    propsData: toastOptions    // 可以向组件中传入 配置项
  })

  toast.$slots.default = [message]

  toast.$mount()
  document.body.appendChild(toast.$el)

  return toast  // 返回这个组件实例

}


export default MyPlugin

