<!-- html -->
<template>
  <m-button class="btn" type="primary" @click="switchType">切换样式</m-button>

  <m-tabs
    :type="tabType"
    v-model="activeName"
    @onTabclick="handleClick"
    @onChangeTab="handleChange"
  >
    <m-tab-pane label="选项卡一" name="one"> 选项卡一 </m-tab-pane>
    <m-tab-pane label="选项卡二" name="tow"> 选项卡二 </m-tab-pane>
    <m-tab-pane label="选项卡三" name="three"> 选项卡三 </m-tab-pane>
  </m-tabs>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
// 默认选择第二个，值为pane的name
const activeName = ref("tow");
const tabType = ref("card");
const switchType = () => {
  tabType.value === "card"
    ? (tabType.value = "line")
    : (tabType.value = "card");
};
// tab点击事件
const handleClick = (tabName) => {
  console.log(tabName);
};
// tab切换事件
const handleChange = (tabName) => {
  console.log(tabName);
};
</script>

<style scoped>
.btn {
  margin-bottom: 20px;
}
</style>