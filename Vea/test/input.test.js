const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  
  // 传值测试部分
  describe('测试传值props', () => {
    const Constructor = Vue.extend(Input)
    let vm;
    afterEach(() => {
      if (vm) {vm.$destroy()}
    })
    
    it('可以传值value.', () => {
      const vm = new Constructor({
        propsData: {
          value: '我是测试value'
        }
      })
      vm.$mount()    // 创建一个新的组件
      
      const inputEle = vm.$el.querySelector('.input')
      expect(inputEle.value).to.equal('我是测试value')
    })
    
    
    it('可以传值disabled.', () => {
      const vm = new Constructor({
        propsData: {
          disabled: true,
        }
      })
      vm.$mount()
      
      const inputEle = vm.$el.querySelector('.input')
      expect(inputEle.disabled).to.eq(true)
    })
    
    
    it('可以传值readonly.', () => {
      const vm = new Constructor({
        propsData: {
          readonly: false,
        }
      })
      vm.$mount()
      
      const inputEle = vm.$el.querySelector('.input')
      expect(inputEle.readOnly).to.eq(false)                 // 注意要是驼峰，不然会是undefined!!!
    })
    
    
    it('可以传值errorMsg.', () => {
      const vm = new Constructor({
        propsData: {
          errorMsg: '你错了',
        }
      })
      vm.$mount()
      
      const iconHref = vm.$el.querySelector('use').getAttribute('xlink:href')
      expect(iconHref).to.equal('#i-error')
      
      const txtEle = vm.$el.querySelector('.errorMessage')
      expect(txtEle.innerText).to.eq('你错了')
    })
  })
  
  // 传值事件部分
  describe('测试事件部分', () => {
    const Constructor = Vue.extend(Input)
    let vm;
    afterEach(() => {
      if (vm) {vm.$destroy()}
    })
  
    it('支持 change/input/focus/blur事件.', () => {
      ['change', 'input', 'focus', 'blur'].forEach(eventName => {
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
  
        const event = new Event(eventName)
        const inputEle = vm.$el.querySelector('.input')
        inputEle.dispatchEvent(event)
  
        expect(callback).to.have.been.called
      })
    })
    
  })
  
  
})
