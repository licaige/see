<template>
  <div class="page-toast">
    <h3 class="comp-title">Toast 轻提示</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="showToast">底部文字提示</so-button>
      <so-button type="success" @click="showToast2">中心文字提示</so-button>
    </div>
    <div class="comp-wrap">
      <so-button type="warning" plain @click="closeToast">关闭当前</so-button>
      <so-button type="danger" plain @click="closeToastAll">全部关闭</so-button>
    </div>
  </div>
</template>

<script setup>
import { SoButton, SoToast } from 'packages/index.js';

let tt;

const showToast = () => {
  tt = SoToast('底部文字提示');
};

const showToast2 = () => {
  tt = SoToast({
    message: '中心文字提示',
    position: 'center',
    onClosed: () => {
      console.log('onClosed');
    }
  });
};

const closeToast = () => {
  tt?.close();
};

const closeToastAll = () => {
  SoToast.clear();
};
</script>

<style lang="scss" scoped></style>
