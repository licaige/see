<template>
  <svg
    :class="[$attrs.class, 'purge-svg',spin && 'purge-svg-spin']"
    :style="getStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
  import {computed, CSSProperties} from 'vue';

  // props
  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      default: 16
    },
    spin: {
      type: Boolean,
      default: false
    }
  })

  // 计算属性 - icon名
  const symbolId = computed(() => `#${props.icon}`)

  // 计算属性 - 获取样式
  const getStyle = computed((): CSSProperties => {
    const { size } = props;
    let s = `${size}`;
    s = `${s.replace('px', '')}px`
    return {
      width: s,
      height: s
    }
  })
</script>

<script lang="ts">
  export default { name: 'SvgIcon' }
</script>

<style scoped>
  .purge-svg {
    display: inline-block;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .purge-svg-spin {
    animation: loadingCircle 1s infinite linear;
  }

  @keyframes loadingCircle {
    0% { transform:rotateZ(0deg) }
    100% { transform:rotateZ(360deg) }
  }
</style>