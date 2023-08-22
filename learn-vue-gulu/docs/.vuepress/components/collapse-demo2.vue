<template>
  <div>
    <l-collapse
      :selected.sync="tabs"
      single
    >
      <l-collapse-item
        title="标题1"
        name="one"
      >这是内容</l-collapse-item>
      <l-collapse-item
        title="标题2"
        name="two"
      >这是内容</l-collapse-item>
      <l-collapse-item
        title="标题3"
        name="three"
      >这是内容</l-collapse-item>
    </l-collapse>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import collapseItem from '../../../src/collapse/collapse-item'

export default {
  name: "collapse-demo2",
  data() {
    return {
      tabs: ['one'],
      content: `
 tabs:['one']

<l-collapse :selected.sync="tabs" single >
    <l-collapse-item title="标题1" name="one">这是内容</l-collapse-item>
    <l-collapse-item title="标题2" name="two">这是内容</l-collapse-item>
    <l-collapse-item title="标题3"  name="three">这是内容</l-collapse-item>
</l-collapse>
                `.trim()
    }
  },
  components: {
    'l-collapse': Collapse,
    'l-collapse-item': collapseItem
  }
}
</script>

<style scoped lang="scss">
</style>