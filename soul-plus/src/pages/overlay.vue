<template>
  <div class="page-overlay">
    <h3 class="comp-title">Overlay 遮罩层</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">显示遮罩层</so-button>

      <so-overlay :show="show" lock-scroll @click="show = !show"></so-overlay>
    </div>

    <h3 class="comp-title">插槽内容</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show2 = !show2">插槽内容</so-button>

      <so-overlay class="over-wrap" :show="show2" @click="show2 = !show2">
        <div class="content" @click.stop>这里是 slot 内容</div>
      </so-overlay>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoOverlay } from 'packages/index.js';

const show = ref(false);
const show2 = ref(false);
</script>

<style lang="scss" scoped>
.page-overlay {
  .over-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      padding: 20px;
      border-radius: 10px;
      background-color: #fff;
    }
  }
}
</style>
