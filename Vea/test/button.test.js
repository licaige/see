const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })

  it('可以设置icon.', () => {
    const btnCreater = Vue.extend(Button)
    const vm = new btnCreater({
      propsData: {
        iconType: 'settings'
      }
    })
    vm.$mount()    // 创建一个新的button组件

    const useElement = vm.$el.querySelector('use')
    const iconHref = useElement.getAttribute('xlink:href')
    expect(iconHref).to.equal('#i-settings')
    vm.$destroy()
  })


  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconType: 'settings',
      }
    })
    vm.$mount(div)

    const svgEle = vm.$el.querySelector('.icon')
    const {order} = window.getComputedStyle(svgEle)
    expect(order).to.eq('0')

    vm.$el.remove()
    vm.$destroy()
  })


  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconType: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)

    const svgEle = vm.$el.querySelector('.icon')
    const {order} = window.getComputedStyle(svgEle)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })


  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconType: 'settings',
      }
    })
    vm.$mount()

    const callback = sinon.fake()
    // vm.$on('click', callback)
    vm.$el.addEventListener("click", callback)
    vm.$el.click()
    
    expect(callback).to.have.been.called

  })
})
