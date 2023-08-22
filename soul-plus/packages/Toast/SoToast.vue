<template>
  <so-popup
    role="toast"
    :class="{
      'so-toast': true,
      [`so-toast--${props.position}`]: props.position
    }"
    v-bind="popupProps"
    :transition="transitionName"
    @update:show="updateShow"
    @closed="onClosed"
  >
    <div
      v-if="props.type === 'html'"
      class="so-toast__text"
      v-html="props.message"
    ></div>
    <div v-else class="so-toast__text">{{ props.message }}</div>
  </so-popup>
</template>

<script setup>
import { computed, watch, onUnmounted } from 'vue';
import { pick } from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../Popup/shared';

import SoPopup from '../Popup';

const props = defineProps({
  ...popupSharedProps,
  lockScroll: { type: Boolean, default: false },
  overlay: { type: Boolean, default: false },

  type: { type: String, default: 'text' },
  position: { type: String, default: 'bottom' }, // center bottom
  message: String,
  duration: { type: Number, default: 2000 }, // 0则不关闭
  transition: String
});

const emit = defineEmits(['update:show', 'closed']);

let timer;

const popupProps = computed(() => {
  return pick(props, popupSharedPropKeys);
});

const transitionName = computed(() => {
  let name = props.position === 'bottom' ? 'so-toast-slide-up' : 'so-fade';
  return props.transition || name;
});

const updateShow = value => emit('update:show', value);

const clearTimer = () => {
  if (timer) clearTimeout(timer);
};

const onClosed = () => {
  emit('closed');
  clearTimer();
};

const close = () => updateShow(false);

watch(
  () => [props.show, props.type, props.message, props.duration],
  () => {
    clearTimer();
    if (props.show && props.duration > 0) {
      timer = setTimeout(close, props.duration);
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  clearTimer();
});

defineExpose({ close });
</script>
