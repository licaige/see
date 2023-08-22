<template>
  <div>
    <img
      src="https://i.loli.net/2018/10/27/5bd3dbfc6bc92.png"
      alt=""
    >
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Layout from '../../../src/layout/layout'
import Header from '../../../src/layout/header'
import Content from '../../../src/layout/content'
import Footer from '../../../src/layout/footer'
export default {

  data() {
    return {
      content: `
<l-layout class="layout">
    <l-header class="header">header</l-header>
    <l-content class="content">content</l-content>
    <l-footer class="footer">footer</l-footer>
</l-layout>`.trim()
    }
  },
  components: {
    'l-layout': Layout,
    'l-header': Header,
    'l-content': Content,
    'l-footer': Footer,
  }
}
</script>

<style scoped lang="scss">
.layout {
  color: white;
  width: 100%;
}
.header {
  height: 40px;
  background: #40a9ff;
  text-align: center;
  line-height: 40px;
}
.content {
  height: 80px;
  background: #096dd9;
  text-align: center;
  line-height: 80px;
  margin: 0;
}
.footer {
  height: 40px;
  background: #40a9ff;
  text-align: center;
  line-height: 40px;
}
</style>