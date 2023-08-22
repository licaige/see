<template>
  <div class="page-button">
    <h3 class="comp-title">Button 按钮</h3>
    <div class="comp-wrap">
      <so-button type="primary">按钮</so-button>
      <so-button type="success">按钮</so-button>
      <so-button>按钮</so-button>
    </div>
    <div class="comp-wrap">
      <so-button type="warning">按钮</so-button>
      <so-button type="danger">按钮</so-button>
    </div>

    <h3 class="comp-title">朴素按钮</h3>
    <div class="comp-wrap">
      <so-button type="primary" plain>按钮</so-button>
      <so-button type="success" plain>按钮</so-button>
      <so-button plain>按钮</so-button>
    </div>
    <div class="comp-wrap">
      <so-button type="warning" plain>按钮</so-button>
      <so-button type="danger" plain>按钮</so-button>
    </div>

    <h3 class="comp-title">禁用状态</h3>
    <div class="comp-wrap">
      <so-button type="primary" disabled>按钮</so-button>
      <so-button type="success" disabled>按钮</so-button>
    </div>

    <h3 class="comp-title">加载状态</h3>
    <div class="comp-wrap">
      <so-button type="primary" loading>按钮</so-button>
      <so-button type="success" plain loading>按钮</so-button>
    </div>

    <h3 class="comp-title">按钮尺寸</h3>
    <div class="comp-wrap">
      <so-button type="primary" size="large">按钮</so-button>
      <so-button type="primary">按钮</so-button>
      <so-button type="primary" size="small">按钮</so-button>
      <so-button type="primary" size="mini">按钮</so-button>
    </div>

    <h3 class="comp-title">按钮形态</h3>
    <div class="comp-wrap">
      <so-button type="primary">按钮</so-button>
      <so-button type="success" round>按钮</so-button>
      <so-button type="success" block>按钮</so-button>
    </div>
  </div>
</template>

<script setup>
import { SoButton } from 'packages/index.js';
</script>

<style lang="scss" scoped>
.page-button {
  background-color: transparent;
}
</style>
