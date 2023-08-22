<template>
  <transition
    name="so-dropdown-item-slide-up"
    @before-leave="el => (el.style.display = 'none')"
  >
    <div ref="paneRef" class="so-dropdown-item" v-show="isActive">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SoDropdownItem'
};
</script>

<script setup>
import {
  computed,
  inject,
  getCurrentInstance,
  ref,
  watchEffect,
  nextTick,
  onUnmounted
} from 'vue';

const props = defineProps({
  title: String,
  disabled: Boolean,
  titleClass: [String, Array, Object]
});

const paneRef = ref();
const instance = getCurrentInstance();
const rootActive = inject('rootActive'); // current active uid
const updatePaneState = inject('updatePaneState');
const updateWrapHeight = inject('updateWrapHeight');

const isActive = computed(() => {
  return rootActive.value === instance.uid;
});

// 更新高度
watchEffect(() => {
  if (isActive.value) {
    nextTick(() => {
      let activeHeight = paneRef.value?.offsetHeight;
      updateWrapHeight(activeHeight ? activeHeight + 'px' : 'auto');
    });
  }
});

// 注入实例
updatePaneState({
  uid: instance.uid,
  instance,
  props
});

onUnmounted(() => {
  updatePaneState({
    uid: instance.uid,
    instance,
    props
  });
});
</script>
