<template>
  <div>
    <l-tabs :selected.sync="tabs">
      <l-tabs-head>
        <l-tabs-item name="one">one</l-tabs-item>
        <l-tabs-item
          name="two"
          disabled
        >
          two
        </l-tabs-item>
        <l-tabs-item name="three">
          three
        </l-tabs-item>
      </l-tabs-head>
      <l-tabs-body>
        <l-tabs-pane name="one">内容 1</l-tabs-pane>
        <l-tabs-pane name="two">内容 2</l-tabs-pane>
        <l-tabs-pane name="three">内容 3</l-tabs-pane>
      </l-tabs-body>
    </l-tabs>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs/tabs'
import tabsHead from '../../../src/tabs/tabs-head'
import tabsBody from '../../../src/tabs/tabs-body'
import tabsItem from '../../../src/tabs/tabs-item'
import tabsPane from '../../../src/tabs/tabs-pane'

export default {
  name: "tabs-demo",
  data() {
    return {
      tabs: 'one',
      content: `
 <l-tabs :selected.sync="tabs">
    <l-tabs-head>
        <l-tabs-item name="one">
        one
        </l-tabs-item>
        <l-tabs-item name="two" disabled >
            two
        </l-tabs-item>
        <l-tabs-item name="three">
            three
        </l-tabs-item>
    </l-tabs-head>
    <l-tabs-body>
        <l-tabs-pane name="one">内容 1</l-tabs-pane>
        <l-tabs-pane name="two">内容 2</l-tabs-pane>
        <l-tabs-pane name="three">内容 3</l-tabs-pane>
    </l-tabs-body>
</l-tabs>`.trim()
    }
  },
  components: {
    'l-tabs': Tabs,
    'l-tabs-head': tabsHead,
    'l-tabs-body': tabsBody,
    'l-tabs-item': tabsItem,
    'l-tabs-pane': tabsPane
  }
}
</script>

<style scoped lang="scss">
</style>