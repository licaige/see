<template>
  <div class="pd-input" :class="styleClass" :disabled="Disabled">
    <input
      ref="inputRef"
      class="pd-input__inner"
      :class="{ ['pd-input--prefix']: isShowPrefixIcon }"
      :readonly="Disabled"
      :value="modelValue"
      @input="changeInputVal"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeyDown"
      v-bind="attrs"
      v-if="!isShowTextarea"
    />
    <!-- 文本域 -->
    <div class="pd-textarea" v-else>
      <textarea
        ref="textareaRef"
        class="pd-textarea__inner"
        :class="{ ['textarea-resize']: isResize }"
        :readonly="Disabled"
        :value="modelValue"
        @input="changeInputVal"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeyDown"
        v-bind="attrs"
      />
    </div>
    <!-- 清除文本图标 -->
    <div
      class="pd-input__suffix"
      v-if="clearAble && isClearAbled"
      @click="clearValue"
    >
      <pd-icon name="clearable"></pd-icon>
    </div>
    <!-- 显示密码图标 -->
    <div class="pd-input__suffix" v-show="isShowPwd" @click="changType">
      <pd-icon :name="eyeIconRef"></pd-icon>
    </div>
    <!-- 显示 Icon 图标 -->
    <div class="pd-input__prefix no-cursor" v-if="isShowPrefixIcon">
      <pd-icon :name="prefixIcon"></pd-icon>
    </div>
    <div class="pd-input__suffix no-cursor" v-if="isShowSuffixIcon">
      <pd-icon :name="suffixIcon"></pd-icon>
    </div>
  </div>
</template>

<script lang="ts">
import "./style/index.less";
import { computed, defineComponent, ref, useAttrs } from "vue";
import { inputProps } from "./types";
import pdIcon from "../icon/index";
export default defineComponent({
  props: inputProps,
  components: { pdIcon },
  setup(props, { emit }) {
    // 动态添加样式
    const styleClass = computed(() => {
      return {
        "is-disabled": props.disabled,
        [`pd-input--${props.size}`]: props.size,
      };
    });

    // 判断是否处于禁用状态
    const Disabled = computed(() => {
      return props.disabled;
    });

    // 获取模型当前的值
    const ModelValue = computed(() => {
      return props.modelValue;
    });

    // 判断是否启动清除文本功能
    const clearAble = computed(() => {
      return props.clearable;
    });

    // 判断输入框文本是否为空
    const isClearAbled = ref(false);

    const inputRef = ref<HTMLInputElement | null>(null);
    const textareaRef = ref<HTMLInputElement | null>(null);

    // 输入框聚焦处理
    const handleFocus = () => {
      if (
        (inputRef.value && inputRef.value.value) ||
        (textareaRef.value && textareaRef.value.value)
      ) {
        isClearAbled.value = true;
      }
    };

    let blurTimeout: number | null = null; // 定时器引用
    // 输入框失焦处理
    const handleBlur = () => {
      blurTimeout = window.setTimeout(() => {
        clearTimeout(blurTimeout!);
        blurTimeout = null;
        isClearAbled.value = false;
      }, 100);
    };

    // 检测父组件是否使用了 v-model 指令, 没有则无法输入文本
    const handleKeyDown = (event: Event) => {
      if (!Object.prototype.hasOwnProperty.call(attrs, "onUpdate:modelValue")) {
        event.preventDefault();
      }
    };

    // 处理输入值的变化
    const changeInputVal = (event: Event) => {
      (event.target as HTMLInputElement).value
        ? (isClearAbled.value = true)
        : (isClearAbled.value = false);
      emit("update:modelValue", (event.target as HTMLInputElement).value);
    };

    // 执行清除文本功能
    const clearValue = () => {
      emit("update:modelValue", "");
      inputRef.value?.focus();
      isClearAbled.value = false;
    };

    // 使用 useAttrs 对 props 进行穿透继承原 input 框的 placeholder 等属性
    const attrs = useAttrs();

    Promise.resolve().then(() => {
      if (props.showPassword) {
        inputRef.value!.type = "password";
      }
    });

    // 判断是否显示密码
    const isShowPwd = computed(() => {
      // 只要用了 clearable 就不显示 showPassword
      return props.showPassword && props.modelValue && !props.clearable;
    });

    const eyeIconRef = ref("bukejian");

    // 切换密码的显示方式
    const changType = () => {
      if (inputRef.value!.type === "password") {
        eyeIconRef.value = "kejian";
        inputRef.value!.type = attrs.type || "text";
        return;
      }
      inputRef.value!.type = "password";
      eyeIconRef.value = "bukejian";
    };

    // 判断输入框是否带 Icon 图标(防止与 clearable 和 showPassword 起冲突)
    const isShowSuffixIcon = computed(() => {
      return props.suffixIcon && !props.clearable && !props.showPassword;
    });

    const isShowPrefixIcon = computed(() => {
      return props.prefixIcon && !props.clearable && !props.showPassword;
    });

    // 判断是否使用文本域
    const isShowTextarea = computed(() => {
      return props.textarea;
    });

    const isResize = computed(() => {
      return props.resize;
    })

    return {
      styleClass,
      Disabled,
      ModelValue,
      clearAble,
      isClearAbled,
      handleFocus,
      handleBlur,
      inputRef,
      textareaRef,
      changeInputVal,
      handleKeyDown,
      clearValue,
      attrs,
      isShowPwd,
      eyeIconRef,
      changType,
      isShowSuffixIcon,
      isShowPrefixIcon,
      isShowTextarea,
      isResize
    };
  },
});
</script>
