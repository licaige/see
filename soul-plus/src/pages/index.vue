<template>
  <div class="page-index">
    <h3 class="comp-title">基础组件</h3>
    <div class="components">
      <router-link v-for="item in baseComps" :key="item.name" :to="item.path">
        <span>{{ item.name }}</span> <i>&gt;</i>
      </router-link>
    </div>

    <h3 class="comp-title">表单组件</h3>
    <div class="components">
      <router-link v-for="item in formComps" :key="item.name" :to="item.path">
        <span>{{ item.name }}</span> <i>&gt;</i>
      </router-link>
    </div>

    <h3 class="comp-title">反馈组件</h3>
    <div class="components">
      <router-link v-for="item in feedbackComps" :key="item.name" :to="item.path">
        <span>{{ item.name }}</span> <i>&gt;</i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const baseComps = ref([
  { name: 'Button 按钮', path: '/button' },
  { name: 'Cell 单元格', path: '/cell' },
  { name: 'Overlay 遮罩层', path: '/overlay' },
  { name: 'Popup 弹出层', path: '/popup' },
  { name: 'Toast 轻提示', path: '/toast' },
  { name: 'Icon 图标', path: '/icon' },
  { name: 'Tabs 标签页', path: '/tabs' }
]);

const formComps = ref([{ name: 'Field 输入框', path: '/field' }]);

const feedbackComps = ref([
  { name: 'DropdownMenu 下拉菜单', path: '/dropdown-menu' },
  { name: 'Dialog 对话框', path: '/dialog' },
  { name: 'ActionSheet 动作面板', path: '/action-sheet' }
]);
</script>

<style lang="scss" scoped>
.page-index {
  padding-bottom: 20px;
  background-color: #fff;
}
.components {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  a {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 10px;
    line-height: 40px;
    border-radius: 20px;
    color: $text-link-color;
    background-color: $background-color;
    i {
      color: $gray-6;
    }
    &:active {
      background-color: $active-color;
    }
  }
}
</style>
