<template>
  <div>
    <l-row>
      <l-col
        class="col"
        span="11"
      >11</l-col>
      <l-col
        class="col"
        span="11"
        offset="2"
      >11</l-col>
    </l-row>

    <l-row>
      <l-col
        class="col"
        span="7"
      >7</l-col>
      <l-col
        class="col"
        span="7"
        offset="1"
      >7</l-col>
      <l-col
        class="col"
        span="7"
        offset="2"
      >7</l-col>
    </l-row>

    <l-row>
      <l-col
        class="col"
        span="8"
      >8</l-col>
      <l-col
        class="col"
        span="3"
        offset="2"
      >3</l-col>
      <l-col
        class="col"
        span="3"
        offset="2"
      >3</l-col>
      <l-col
        class="col"
        span="4"
        offset="2"
      >3</l-col>
    </l-row>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Row from '../../../src/grid/row'
import Col from '../../../src/grid/col'
export default {
  name: "grid-demo3",
  data() {
    return {
      content: `
<l-row>
    <l-col class="col" span="11" >11</l-col>
    <l-col class="col" span="11" offset="2">11</l-col>
</l-row>

<l-row>
    <l-col class="col" span="7" >7</l-col>
    <l-col class="col" span="7" offset="1">7</l-col>
    <l-col class="col" span="7" offset="2">7</l-col>
</l-row>

<l-row>
    <l-col class="col" span="8" >8</l-col>
    <l-col class="col" span="3" offset="2">3</l-col>
    <l-col class="col" span="3" offset="2">3</l-col>
    <l-col class="col" span="4" offset="2">3</l-col>
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