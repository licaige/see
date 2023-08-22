<template>
  <div class="pd-icon">
    <svg class="icon" aria-hidden="true" :style="iconColor">
      <use :xlink:href="iconName"></use>
    </svg>
    <div v-if="dot" class="pd-info" :class="styleDot">{{ badge }}</div>
  </div>
</template>
 <script lang="ts">
import "./font/iconfont.js";
import "./style/index.less";
import { defineComponent, computed } from "vue";
import { iconProps } from "./types";
export default defineComponent({
  props: iconProps,
  setup(props) {
    // 图标名称
    const iconName = computed(() => {
      return `#pd-${props.name}`;
    });

    // 徽章更改
    const badge = computed(() => {
      if(parseInt(props.badge as string) >= 99) {
        return "99+";
      }
      return props.badge;
    });

    // 红点展示
    const dot = computed(() => {
        return props.dot;
    });

    // 红点展示样式
    const styleDot = computed(() => {
      return {
        [`pd-dot`]: dot.value && !badge.value,
      };
    });

    // 颜色改变
    const iconColor = computed(() => {
      return {
        color: props.color
      }
    });

    return {
      iconName,
      badge,
      dot,
      styleDot,
      iconColor
    };
  },
});
</script>
