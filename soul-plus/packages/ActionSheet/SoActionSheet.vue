<template>
  <so-popup
    role="action-sheet"
    class="so-action-sheet"
    v-bind="popupProps"
    :position="props.position"
    @update:show="updateShow"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
    @click-overlay="onClickOverlay"
    :style="{ width: props.width }"
  >
    <div class="so-action-sheet__title" v-if="props.title">
      {{ props.title }}
    </div>

    <div class="so-action-sheet__description" v-if="props.description">
      {{ props.description }}
    </div>

    <div class="so-action-sheet__content">
      <slot>
        <div
          role="button"
          class="so-action-sheet__item"
          v-for="(action, index) in actions"
          :class="[
            { 'so-action-sheet__item--disabeld': action.disabled },
            { 'so-action-sheet__item--loading': action.loading },
            action.className
          ]"
          @click="onSelect(action, index)"
          :style="{ color: action.color }"
        >
          <span class="so-action-sheet__name">{{ action.name }}</span>
          <span v-if="action.loading" class="so-action-sheet__indicator"></span>
        </div>
      </slot>
    </div>

    <template v-if="props.cancelText">
      <div class="so-action-sheet__separate"></div>
      <div class="so-action-sheet__cancel" @click="onCancel">
        {{ props.cancelText }}
      </div>
    </template>
  </so-popup>
</template>

<script setup>
import { computed, nextTick } from 'vue';

import { pick } from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../Popup/shared';

import SoPopup from '../Popup';

const props = defineProps({
  ...popupSharedProps,

  position: { type: String, default: 'bottom' },
  title: String,
  description: String,
  actions: Array, // {name,color,className,disabled,callback}
  width: String,
  cancelText: String,
  closeOnClickAction: Boolean
});

const emit = defineEmits([
  'update:show',
  'cancel',
  'select',
  'click-overlay',
  'open',
  'opened',
  'close',
  'closed'
]);

const popupProps = computed(() => {
  return pick(props, popupSharedPropKeys);
});

const updateShow = value => emit('update:show', value);

const onCancel = () => {
  updateShow(false);
  emit('cancel');
};

const onSelect = (action, index) => {
  if (action.disabled || action.loading) return;

  if (action.callback) {
    action.callback(action);
  }

  if (props.closeOnClickAction) {
    updateShow(false);
  }

  nextTick(() => {
    emit('select', action, index);
  });
};

const onOpen = () => emit('open');
const onOpened = () => emit('opened');
const onClose = () => emit('close');
const onClosed = () => emit('closed');
const onClickOverlay = event => emit('click-overlay', event);
</script>
