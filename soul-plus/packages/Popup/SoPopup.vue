<template>
  <teleport
    :to="props.teleport"
    :disabled="!props.teleport || props.disabledTeleport"
  >
    <so-overlay
      :class-name="props.overlayClass"
      v-if="props.overlay"
      :show="props.show"
      :z-index="props.zIndex"
      :custom-style="props.overlayStyle"
      @click="clickOverlay"
    >
      <slot name="overlay"></slot>
    </so-overlay>

    <transition
      :name="transitionName"
      appear
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <div
        ref="popupRef"
        :class="['so-popup', classes]"
        v-if="initRender"
        v-show="props.show"
        :style="{ zIndex: props.zIndex }"
        v-bind="attrs"
        @click="onClick"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<script setup>
import { ref, useAttrs, computed, watch, onMounted } from 'vue';
import { callInterceptor } from '../utils';
import { useTruthy, useLockScroll } from '../hooks';
import { popupSharedProps } from './shared';
// components
import SoOverlay from '../Overlay';

const props = defineProps({
  ...popupSharedProps,

  position: { type: String, default: 'center' }, // top bottom right left
  transition: String
});

const emit = defineEmits([
  'update:show',
  'click',
  'click-overlay',
  'open',
  'opened',
  'close',
  'closed'
]);

const attrs = useAttrs();

const isOpened = ref(false); // popup是否处于打开状态

const popupRef = ref();
const initRender = useTruthy(() => props.show);

const classes = computed(() => {
  return {
    [`so-popup--${props.position}`]: props.position
  };
});

const transitionName = computed(() => {
  let slideName =
    props.position === 'center'
      ? 'so-popup-swing-top'
      : `so-popup-slide-${props.position}`;
  return props.transition || slideName;
});

// 开启
const open = () => {
  if (isOpened.value) return;

  isOpened.value = true;
  emit('open');
};

// 关闭
const close = () => {
  if (!isOpened.value) return;

  callInterceptor({
    interceptor: props.beforeClose,
    done: () => {
      isOpened.value = false;
      emit('close');
      emit('update:show', false);
    }
  });
};

const clickOverlay = event => {
  emit('click-overlay', event);
  if (props.closeOnClickOverlay) {
    close();
  }
};

const onClick = event => emit('click', event);
const onOpened = () => emit('opened');
const onClosed = () => emit('closed');

watch(
  () => props.show,
  value => {
    if (value) {
      open();
    } else {
      if (!isOpened.value) return;
      isOpened.value = false;
      emit('close');
    }
  }
);

onMounted(() => {
  if (props.show) {
    open();
  }
});

useLockScroll(popupRef, () => props.show && props.lockScroll);
</script>
