<template>
  <transition name="so-fade" appear>
    <div
      ref="overlayRef"
      :class="['so-overlay', props.className]"
      v-if="initRender"
      v-show="props.show"
      :style="{ zIndex: props.zIndex, ...customStyle }"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue';
import { useTruthy, useLockScroll } from '../hooks';

const props = defineProps({
  show: Boolean,
  zIndex: [Number, String],
  className: String,
  customStyle: Object,
  lockScroll: Boolean
});

const overlayRef = ref();
const initRender = useTruthy(() => props.show);

useLockScroll(overlayRef, () => props.show && props.lockScroll);
</script>
