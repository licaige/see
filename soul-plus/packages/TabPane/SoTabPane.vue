<template>
  <div class="so-tab-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SoTabPane'
};
</script>

<script setup>
import { computed, getCurrentInstance, inject, ref } from 'vue';

const props = defineProps({
  title: String,
  name: String,
  disabled: Boolean
});

const instance = getCurrentInstance();
const index = ref(); // 由 tabs 排序赋值

// provide,inject
const rootTabs = inject('rootTabs'); // {props, currentName}
const updatePaneState = inject('updatePaneState');

if (!rootTabs || !updatePaneState) {
  throw new Error(`TabPane must use with Tabs`);
}

const paneName = computed(() => {
  return props.name || `${index.value}`;
});

const active = computed(() => {
  return rootTabs.currentName.value === paneName.value;
});

updatePaneState({
  uid: instance.uid,
  instance,
  props,
  index,
  paneName,
  active
});

defineExpose({ index });
</script>
