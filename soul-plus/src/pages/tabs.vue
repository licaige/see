<template>
  <div class="page-tabs">
    <h3 class="comp-title">Tabs 标签页</h3>
    <div class="comp-wrap">
      <so-tabs v-model:active="tabActive">
        <so-tab-pane title="标签 1" name="tab1">
          <div class="pane-content">内容1</div>
        </so-tab-pane>
        <so-tab-pane title="标签 2" name="tab2">
          <div class="pane-content">内容2</div>
        </so-tab-pane>
      </so-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoTabs, SoTabPane } from 'packages/index.js';

const tabActive = ref('tab1');
</script>

<style lang="scss" scoped>
.page-tabs {
  .pane-content {
    padding: 20px;
  }
}
</style>
