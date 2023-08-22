<template>
  <so-popup
    role="dialog"
    :class="['so-dialog', props.className]"
    v-bind="popupProps"
    @update:show="updateShow"
    :style="{ width: props.width }"
  >
    <div class="so-dialog__header">
      <slot name="header">
        <div class="so-dialog__title" v-if="props.title">{{ props.title }}</div>
      </slot>
    </div>

    <div class="so-dialog__content">
      <slot>
        <div
          :class="{
            'so-dialog__message': true,
            'so-dialog__message--has-title': props.title
          }"
        >
          {{ props.message }}
        </div>
      </slot>
    </div>

    <div class="so-dialog__footer">
      <slot name="footer">
        <div class="so-dialog__btns">
          <so-button
            v-if="props.showCancelButton"
            class="so-dialog__cancel"
            size="large"
            :loading="loading.cancel"
            @click="onCancel"
          >
            {{ props.cancelButtonText }}
          </so-button>

          <so-button
            v-if="props.showConfirmButton"
            class="so-dialog__confirm"
            size="large"
            :loading="loading.confirm"
            @click="onConfirm"
          >
            {{ props.confirmButtonText }}
          </so-button>
        </div>
      </slot>
    </div>
  </so-popup>
</template>

<script setup>
import { computed, reactive } from 'vue';

import { pick, callInterceptor } from '../utils';
import { popupSharedProps, popupSharedPropKeys } from '../Popup/shared';

import SoPopup from '../Popup';
import SoButton from '../Button';

const props = defineProps({
  ...popupSharedProps,
  closeOnClickOverlay: { type: Boolean, default: false },

  title: String,
  width: String,
  message: [String, Element],
  className: String,
  callback: Function,
  showConfirmButton: { type: Boolean, default: true },
  showCancelButton: { type: Boolean, default: true },
  confirmButtonText: { type: String, default: 'Ok' },
  cancelButtonText: { type: String, default: 'Cancel' }
});

const emit = defineEmits(['update:show', 'confirm', 'cancel']);

const loading = reactive({
  confirm: false,
  cancel: false
});

const popupProps = computed(() => {
  return pick(props, popupSharedPropKeys);
});

const updateShow = value => emit('update:show', value);

const close = action => {
  updateShow(false);

  if (props.callback) {
    props.callback(action);
  }
};

const actionHandler = action => {
  if (!props.show) return;

  emit(action);

  if (props.beforeClose) {
    loading[action] = true;
    callInterceptor({
      interceptor: props.beforeClose,
      args: [action],
      done: () => {
        close(action);
        loading[action] = false;
      },
      canceled: () => {
        loading[action] = false;
      }
    });
  } else {
    close(action);
  }
};

const onConfirm = () => actionHandler('confirm');
const onCancel = () => actionHandler('cancel');
</script>
