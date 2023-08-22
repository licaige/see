<template>
  <div class="pd-watermark" ref="waterMarkRef">
   <slot></slot>
  </div>
</template>
<script lang="ts">;
import "./style/index.less";
import { defineComponent, computed, onMounted, ref, Ref } from "vue";
import { watermarkProps } from "./types";
import { getMark } from "./watermark";
export default defineComponent({
  props: watermarkProps,
  setup(props) {
    // 是否展示水印创建时间
    const isShowTime = computed(() => {
      return props.isShowTime;
    })

    // 水印名设置
    const markName = computed(() => {
      return props.markName;
    })

    // 水印文字颜色
    const fontColor = computed(() => {
      return props.fontColor;
    })

    // 设置水印
    const waterMarkRef: Ref<null | HTMLElement> = ref(null);
    const { waterMark } = getMark();
    onMounted(() => {
      waterMark(markName.value!, isShowTime.value, waterMarkRef.value!, fontColor.value); //水印名
    })

    return {
      isShowTime,
      markName,
      fontColor,
      waterMarkRef
    };
  },
});
</script>
