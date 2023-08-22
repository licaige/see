<template>
  <span
    class="inactive-text"
    v-if="showInactText"
    :class="{ 'selected-text-color': !checked }"
    @click="handleInput"
    >{{ inactiveText }}</span>
  <div
    class="pd-switch"
    :class="{ 'is-checked': checked, 'is-disabled': disabled }"
  >
    <input
      class="pd-switch__input"
      ref="inputRef"
      type="checkbox"
      :checked="checked"
      @change="handleInput"
      :true-value="trueValue"
      :false-value="falseValue"
    />
    <span class="pd-switch_action" style="cursor: pointer"></span>
  </div>
  <span
    class="active-text"
    v-if="showActText"
    :class="{ 'selected-text-color': checked }"
    @click="handleInput"
    >{{ activeText }}</span>
</template>

<script setup lang="ts">
import "./style/index.less";
import { computed, ref, Ref, nextTick } from "vue";
import { switchProps } from "./types";
const props = defineProps(switchProps);
// 导出开关背景颜色供 index.less 使用
document.documentElement.style.setProperty("--active-color", props.activeColor);
document.documentElement.style.setProperty("--inactive-color", props.inactiveColor);
document.documentElement.style.setProperty("--switch-width", props.width + "px");
document.documentElement.style.setProperty("--text-color", props.textColor);

const emits = defineEmits(["update:modelValue", "change"]);
const inputRef: Ref<HTMLInputElement | null> = ref(null);

// 判断当前开关状态
const checked = computed(() => {
  return props.modelValue === props.trueValue;
});

// 判断开关是否禁用
const disabled = computed(() => {
  return props.disabled;
});

// 判断是否使用文字描述
const showActText = computed(() => {
  return props.activeText?.length ? true : false;
});
const showInactText = computed(() => {
  return props.inactiveText?.length ? true : false;
});

// 获取当前 input 事件
const handleInput = () => {
  nextTick(() => {
    const val = !checked.value;      // 取反得到相反的状态
    inputRef.value!.checked = val;   // 更新开关状态
    emits("update:modelValue", val); // 开关点击后将状态传给 v-model
    emits("change", val);            // 开关状态发生改变后触发的回调
  });
};
</script>
