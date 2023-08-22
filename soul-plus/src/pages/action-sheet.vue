<template>
  <div class="page-action-sheet">
    <h3 class="comp-title">ActionSheet 动作面板</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show1 = true">基础用法</so-button>

      <so-button type="primary" @click="show2 = true">展示取消按钮</so-button>
    </div>

    <h3 class="comp-title">选项状态</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show3 = true">选项状态</so-button>
    </div>

    <h3 class="comp-title">插槽内容</h3>
    <div class="comp-wrap">
      <so-button type="primary" @click="show4 = true">自定义内容</so-button>
    </div>

    <so-action-sheet
      v-model:show="show1"
      :actions="actions1"
      close-on-click-action
    ></so-action-sheet>

    <so-action-sheet
      v-model:show="show2"
      :actions="actions1"
      description="这是一段描述，以下是操作选项"
      cancel-text="取消"
      close-on-click-action
    ></so-action-sheet>

    <so-action-sheet
      v-model:show="show3"
      description="这是一段描述，以下是操作选项"
      cancel-text="取消"
      :actions="actions3"
    ></so-action-sheet>

    <so-action-sheet
      v-model:show="show4"
      description="这是一段描述，以下是自定义内容"
      cancel-text="取消"
    >
      <div class="custom-demo">内容</div>
    </so-action-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoButton, SoActionSheet, SoToast } from 'packages/index.js';

const show1 = ref(false);
const actions1 = ref([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
]);

const show2 = ref(false);

const show3 = ref(false);

const deleteHandler = action => {
  action.loading = true;
  setTimeout(() => {
    action.loading = false;
    show3.value = false;
    SoToast('删除成功');
  }, 2000);
};

const actions3 = ref([
  { name: '选项一' },
  { name: '选项二', disabled: true },
  { name: '删除', color: 'red', className: 'delete', callback: deleteHandler }
]);

const show4 = ref(false);
</script>

<style lang="scss" scoped>
.custom-demo {
  padding: 30px;
  text-align: center;
}
</style>
