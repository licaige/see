<template>
  <div class="page-popup">
    <h3 class="comp-title">Popup 弹出层</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">显示弹出层</so-button>
      <so-popup
        v-model:show="show"
        :style="{ padding: '100px', backgroundColor: '#fff' }"
      ></so-popup>
    </div>

    <h3 class="comp-title">弹出位置</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="showTop = !showTop">顶部弹出</so-button>

      <so-button type="success" @click="showBottom = !showBottom"
        >底部弹出</so-button
      >

      <so-button type="warning" @click="showLeft = !showLeft"
        >左侧弹出</so-button
      >
    </div>

    <div class="comp-wrap">
      <so-button type="danger" @click="showRight = !showRight"
        >右侧弹出</so-button
      >
    </div>

    <so-popup
      v-model:show="showTop"
      position="top"
      :style="{ height: '30%' }"
    ></so-popup>

    <so-popup
      v-model:show="showBottom"
      position="bottom"
      :style="{ height: '30%' }"
    ></so-popup>

    <so-popup
      v-model:show="showLeft"
      position="left"
      :style="{ width: '30%', height: '100%' }"
    ></so-popup>

    <so-popup
      v-model:show="showRight"
      position="right"
      :style="{ width: '30%', height: '100%' }"
    ></so-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoPopup } from 'packages/index.js';

const show = ref(false);
const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
</script>

<style lang="scss" scoped></style>
