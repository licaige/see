<template>
  <div class="page-overlay">
    <h3 class="comp-title">Dialog 对话框</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="showDialog">提示对话框</so-button>
      <so-button type="success" @click="showDialog2"
        >对话框（无标题）</so-button
      >
    </div>

    <h3 class="comp-title">异步关闭</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="showDialog3">异步关闭</so-button>
    </div>

    <h3 class="comp-title">组件调用</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show = !show">组件调用</so-button>

      <so-dialog v-model:show="show" title="title" message="Are you sure???">
      </so-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoDialog } from 'packages/index.js';

const show = ref(false);
const show2 = ref(false);

const onBeforeClose = action => {
  return new Promise(resolve => {
    if (action !== 'confirm') return resolve(true);
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const showDialog = () => {
  SoDialog.alert({
    title: 'Alert',
    message: '显示对话框'
  });
};

const showDialog2 = () => {
  SoDialog.alert({
    message: '无标题对话框无标题对话框无标题对话框无标题对话框'
  });
};

const showDialog3 = () => {
  SoDialog.alert({
    title: 'Alert',
    message: '显示对话框',
    beforeClose: onBeforeClose
  });
};
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
