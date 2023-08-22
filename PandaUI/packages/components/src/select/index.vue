<template>
  <div class="pd-select" v-clickOutside :disabled="disabled">
    <input
      type="text"
      readonly
      :value="selectValue"
      :class="{ disabled: disabled }"
      :placeholder="placeholder"
    />
    <!-- 下拉盒子 -->
    <Transition name="slide-fade">
      <div class="pd-position-box" v-if="positionShow">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="change(item, index)"
          :class="{
            disabled: item.disabled,
            'item-active-li': activeIndex === index,
          }"
          class="item-li"
        >
          {{ item[fileLabel] }}
        </li>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import "./style/index.less";
import { onBeforeUnmount, ref, Ref } from "vue";
import { selectProps, Option } from "./types";
// 自定义 change 事件用于触发时向外传递所选选项的参数
const emit = defineEmits(["change"]);
const props = defineProps(selectProps);
// 被激活的选项索引
const activeIndex: Ref<number> = ref(-1);
const selectValue: Ref<string | null> = ref("");
// 判断是否展示下拉盒子
const positionShow: Ref<boolean> = ref(false);
// 自定义指令(用于判断是否点击到 select 选择器)
const vClickOutside = {
  beforeMount(el: HTMLElement) {
    let handler = (e: MouseEvent) => {
      if (!props.disabled) {
        // 判断当前点击区域是否为下拉框,如果是则显示下拉盒子
        if (
          el.contains(e.target as Node) &&
          (e.target as HTMLElement).className.indexOf("item-li") === -1
        ) {
          // 当将e.target作为参数传递给事件处理函数时，需要根据需要明确指定事件对象的类型
          positionShow.value = true;
        } else {
          // 点击禁用选项不给予反应
          if (!(e.target as HTMLElement).classList.contains("disabled")) {
            positionShow.value = false;
          }
        }
      }
    };
    document.addEventListener("click", handler);
  },
  // 组件销毁前清除监听
  onBeforeUnmount() {
    let handler = (e: MouseEvent) => {};
    document.removeEventListener("click", handler);
  },
};
const change = (item: Option, index: number) => {
  if (!item.disabled) {
    activeIndex.value = index;
    selectValue.value = item[props.fileLabel as keyof Option];
    positionShow.value = false;
    // 触发 change 自定义事件回传 item
    emit("change", item);
  }
};
</script>
