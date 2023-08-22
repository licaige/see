<template>
  <div class="page-cell">
    <h3 class="comp-title">Cell 单元格</h3>
    <div class="comp-wrap">
      <so-cell title="标题" value="内容"></so-cell>
      <so-cell title="标题" label="描述信息" value="内容"></so-cell>
    </div>

    <h3 class="comp-title">展示图标</h3>
    <div class="comp-wrap">
      <so-cell icon="fail" title="标题" label="描述语句" value="内容"></so-cell>
    </div>

    <h3 class="comp-title">可点击</h3>
    <div class="comp-wrap">
      <so-cell right-icon="arrow" title="标题" value="内容" clickable></so-cell>
    </div>

    <h3 class="comp-title">使用插槽</h3>
    <div class="comp-wrap">
      <so-cell>
        <template #title>标题</template>
        <template #label>描述信息</template>
        <span>内容</span>
      </so-cell>
    </div>
  </div>
</template>

<script setup>
import { SoCell } from 'packages/index.js';
</script>

<style lang="scss" scoped>
.page-cell {
  .comp-wrap {
    padding-left: 0;
    padding-right: 0;
    background-color: #fff;
  }
}
</style>
