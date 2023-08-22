const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col  from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })
  
  // 传值测试部分

  describe('接收 gutter属性', () => {
    Vue.component('e-row', Row)
    Vue.component('e-col', Col)
    
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <e-row gutter="20">
        <e-col span="12"></g-col>
        <e-col span="12"></g-col>
      </e-row>
    `

    const vm = new Vue({
      el: div
    })


    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      
      vm.$el.remove()
      vm.$destroy()
    })
    
  })
  
  
})
