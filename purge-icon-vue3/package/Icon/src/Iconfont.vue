<template>
  <span
    :class="[$attrs.class, 'iconfont purge-iconfont', props.icon, props.spin && 'purge-iconfont-spin']"
    :style="getWrapStyle"
  />
</template>

<script lang="ts" setup>
  import {computed, CSSProperties} from 'vue';

  // props
  const props = defineProps({
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: undefined
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

  // 计算属性 - 获取样式
  const getWrapStyle = computed((): CSSProperties => {
    const { size, color } = props;
    let fs = size;
    if (Object.prototype.toString.call(size) === '[object String]') {
      fs = parseInt(size as string, 10);
    }

    return {
      fontSize: `${fs}px`,
      color: color,
      display: 'inline-flex'
    };
  })
</script>

<script lang="ts">
  export default { name: 'Iconfont' }
</script>

<style scoped>
  .purge-iconfont-spin {
    animation: loadingCircle 1s infinite linear;
  }
  
  @keyframes loadingCircle {
    0% { transform:rotateZ(0deg) }
    100% { transform:rotateZ(360deg) }
  }
</style>