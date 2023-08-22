<template>
  <div class="pd-collapse-item">
    <!-- 标题 -->
    <div
      class="pd-collapse-header"
      @click="handleClick"
      :style="{ backgroundColor: headerBgColor }"
    >
      <span>{{ title }}</span>
      <pd-icon name="youbian" :class="{ rotate: isCollapse }"></pd-icon>
    </div>
    <!-- 菜单子项 -->
    <Transition name="slide-fade">
      <div class="content" v-if="isCollapse">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import "./style/index.less";
import pdIcon from "../icon/index.vue";
import { inject, ref } from "vue";
import { collapseProps } from "./types";
const props = defineProps(collapseProps);

// 控制菜单子项的展开与折叠
const isCollapse = ref(false);
const handleClick = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
