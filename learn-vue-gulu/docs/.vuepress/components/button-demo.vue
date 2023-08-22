<template>
  <div>
    <l-button>Button</l-button>
    <l-button :loading="loading">Button</l-button>
    <l-button icon="settings" :loading="loading2" @click="loading2 = !loading2">Button</l-button>
    <l-button disabled>Button</l-button>
    <l-button-group>
      <l-button icon="left">上一页</l-button>
      <l-button>666</l-button>
      <l-button icon="right" icon-position="right">下一页</l-button>
    </l-button-group>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/button/button'
import ButtonGroup from '../../../src/button/buttonGroup'

export default {
  components: {
    'l-button': Button,
    'l-button-group': ButtonGroup
  },
  data() {
    return {
      loading: true,
      loading2: false,
      content: `
<l-button>Button</l-button>
<l-button :loading="loading">Button</l-button>
<l-button icon="settings" :loading="loading2" @click="loading2 = !loading2">Button</l-button>
<l-button disabled>Button</l-button>
<l-button-group>
  <l-button icon="left">上一页</l-button>
  <l-button>666</l-button>
  <l-button icon="right" icon-position="right">下一页</l-button>
</l-button-group>
      `.trim()
    }
  }
}
</script>

<style scoped lang="scss">
  *{box-sizing:border-box;}
.button{
  margin:5px 3px;
}
</style>
