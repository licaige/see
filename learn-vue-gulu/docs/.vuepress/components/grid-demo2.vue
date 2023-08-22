<template>
  <div>
    <l-row gutter="20">
      <l-col
        class="col"
        span="12"
      >12</l-col>
      <l-col
        class="col"
        span="12"
      >12</l-col>
    </l-row>

    <l-row gutter="20">
      <l-col
        class="col"
        span="8"
      >8</l-col>
      <l-col
        class="col"
        span="8"
      >8</l-col>
      <l-col
        class="col"
        span="8"
      >8</l-col>
    </l-row>

    <l-row gutter="20">
      <l-col
        class="col"
        span="6"
      >6</l-col>
      <l-col
        class="col"
        span="6"
      >6</l-col>
      <l-col
        class="col"
        span="6"
      >6</l-col>
      <l-col
        class="col"
        span="6"
      >6</l-col>
    </l-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Row from '../../../src/grid/row'
import Col from '../../../src/grid/col'
export default {
  name: "grid-demo2",
  data() {
    return {
      content: `
 <l-row gutter="20">
     <l-col class="col" span="12">12</l-col>
     <l-col class="col" span="12">12</l-col>
 </l-row>

 <l-row gutter="20">
     <l-col class="col" span="8">8</l-col>
     <l-col class="col" span="8">8</l-col>
     <l-col class="col" span="8">8</l-col>
 </l-row>

 <l-row gutter="20">
     <l-col class="col" span="6">6</l-col>
     <l-col class="col" span="6">6</l-col>
     <l-col class="col" span="6">6</l-col>
     <l-col class="col" span="6">6</l-col>
 </l-row>
                `.trim()
    }
  },
  components: {
    "l-col": Col,
    "l-row": Row
  }
}
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background: #40a9ff;
  color: white;
  border: 1px solid #1890ff;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
}
</style>