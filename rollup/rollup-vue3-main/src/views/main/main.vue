<template>
  <div class="main">
    <p>rollup+vue3</p>
    <div class="logo-div">
      <img :src="logoImg" />
    </div>

    <button @click="() => count++">点击+1({{ count }})</button>
  </div>
</template>
<script>
import { isArray } from "libs/array.js";
import WorkManImg from "@/assets/images/work-man.png";
// import LazySelect from "@/components/lazySelect/index.jsx";

export default {
  components: {
    // LazySelect,
  },
  data() {
    this.logoImg = WorkManImg;
    return {
      count: 2,
      //
    };
  },
  mounted() {
    console.log(isArray([1, 2, 3]));
  },
};
</script>
<style lang="less">
.main {
  text-align: center;
  .logo-div {
    height: 400px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  p {
    font-size: 32px;
    color: aqua;
  }
  button {
    color: red;
  }
}
</style>
