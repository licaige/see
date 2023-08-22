import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Popover from '../src/popover'
chai.use(sinonChai)

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('接收 position 属性', (done) => {
    Vue.component('l-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <l-popover ref="a">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <button>上</button>
      </l-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const { contentWrapper } = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-top')).to.be.true
      done()
    })
  })

  it('接收 trigger 属性', (done) => {
    Vue.component('l-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <l-popover trigger="hover" ref="a">
        <template slot="content">
          <div>popover 内容</div>
        </template>
        <button>上</button>
      </l-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let event = new Event('mouseenter')
      const popover = vm.$el.querySelector('.popover')
      popover.dispatchEvent(event)
      vm.$nextTick(() => {
        const { contentWrapper } = vm.$refs.a.$refs
        expect(contentWrapper).to.exist
        done()
      })
    })
  })

})