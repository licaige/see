import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import VirtualList from '../src/virtual-list.vue'

const AXIOM = 'Tu view is good'

describe('VirtualList.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <VirtualList>{AXIOM}</VirtualList>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
