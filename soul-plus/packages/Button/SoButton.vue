<template>
  <button
    :class="['so-button', classes]"
    type="button"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <span v-if="props.loading" class="so-button__indicator"></span>
    <span class="so-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: String, // primary success warning danger
  size: String, // large small mini
  plain: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  block: { type: Boolean, default: false }
});

const emit = defineEmits(['click']);

const classes = computed(() => {
  return {
    [`so-button--${props.type}`]: props.type,
    [`so-button--${props.size}`]: props.size,
    [`so-button--plain`]: props.plain,
    [`so-button--round`]: props.round,
    [`so-button--block`]: props.block,
    [`so-button--loading`]: props.loading
  };
});

const handleClick = event => {
  if (props.disabled || props.loading) return;
  emit('click', event);
};
</script>
