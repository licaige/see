<template>
  <div>
    <l-button
      class="toast"
      @click="showToast1"
    >Toast-top</l-button>
    <l-button
      class="toast"
      @click="showToast2"
    >Toast-middle</l-button>
    <l-button
      class="toast"
      @click="showToast3"
    >Toast-bottom</l-button>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
.toast {
  border: 1px solid #666;
  background: white;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from '../../../src/plugin'
import Button from '../../../src/button/button'
import Vue from 'vue'
Vue.use(plugin);

export default {
  components: {
    'l-button': Button
  },
  data() {
    return {
      content: `
<l-button class="toast"  @click="showToast1">Toast-top</l-button>
<l-button class="toast" @click="showToast2">Toast-middle</l-button>
<l-button class="toast" @click="showToast3">Toast-bottom</l-button>

showToast1(){ this.$toast('这是消息体A',{ position:'top' }) },
showToast2(){ this.$toast('这是消息体B',{ position:'middle' }) },
showToast3(){
    //$toast第一个参数可以是字符串也可以是html
    this.$toast('这是消息体C',{
        position:'bottom',
        enableHtml:true,
        autoClose:2,
    })
}`.trim()

    }
  },
  methods: {
    showToast1() {
      this.$toast('这是消息体A', {
        position: 'top',
      })
    },
    showToast2() {
      this.$toast('这是消息体B', {
        position: 'middle'
      })
    },
    showToast3() {
      //$toast第一个参数可以是字符串也可以是html
      this.$toast('这是消息体C', {
        position: 'bottom',
        enableHtml: true,
        autoClose: 3,//false 或具体 数字
      })
    },
  }
}
</script>