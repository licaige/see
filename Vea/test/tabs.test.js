const expect = chai.expect;
import Vue from 'vue'

import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('e-tabs', Tabs)
Vue.component('e-tabs-head', TabsHead)
Vue.component('e-tabs-body', TabsBody)
Vue.component('e-tabs-item', TabsItem)
Vue.component('e-tabs-pane', TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false


describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })


  it('接受 selected 属性', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <e-tabs selected="finance">
        <e-tabs-head>
          <e-tabs-item name="woman"> 美女 </e-tabs-item>
          <e-tabs-item name="finance"> 财经 </e-tabs-item>
          <e-tabs-item name="sports"> 体育 </e-tabs-item>
        </e-tabs-head>
        <e-tabs-body>
          <e-tabs-pane name="woman"> 美女相关资讯 </e-tabs-pane>
          <e-tabs-pane name="finance"> 财经相关资讯 </e-tabs-pane>
          <e-tabs-pane name="sports"> 体育相关资讯 </e-tabs-pane>
        </e-tabs-body>
      </e-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受 direction prop', () => {

  })


})
