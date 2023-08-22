<template>
  <div class="wrapper">
    <div class="block">
      <l-popover
        trigger="click"
        position="left"
        class="popover"
      >
        <l-button>左</l-button>
        <div slot="content">你好</div>
      </l-popover>
      <l-popover
        trigger="click"
        position="top"
        class="popover"
      >
        <l-button>上</l-button>
        <div slot="content">你好</div>
      </l-popover>
      <l-popover
        trigger="click"
        position="bottom"
        class="popover"
      >
        <l-button>下</l-button>
        <div slot="content">你好</div>
      </l-popover>
      <l-popover
        trigger="click"
        position="right"
        class="popover"
      >
        <l-button>右</l-button>
        <div slot="content">你好</div>
      </l-popover>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>

<script>
import Popover from '../../../src/popover/popover'
import Button from '../../../src/button/button.vue'
export default {
  components: {
    'l-popover': Popover,
    'l-button': Button
  },
  data() {
    return {
      content: `
<l-popover trigger="click" position="left" class="popover">
    <l-button>左</l-button>
    <div slot="content">你好</div>
</l-popover>
<l-popover trigger="click" position="top" class="popover">
    <l-button>上</l-button>
    <div slot="content">你好</div>
</l-popover>
<l-popover trigger="click" position="bottom" class="popover">
    <l-button>下</l-button>
    <div slot="content">你好</div>
</l-popover>
<l-popover trigger="click" position="right" class="popover">
    <l-button>右</l-button>
    <div slot="content">你好</div>
</l-popover>
      `.trim()
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  .popover {
    margin-left: 20px;
  }
}
</style>