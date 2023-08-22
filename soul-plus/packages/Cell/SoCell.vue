<template>
  <div
    class="so-cell"
    :class="{
      'so-cell--center': props.center,
      'so-cell--clickable': props.clickable
    }"
    @click="onClick"
  >
    <slot name="icon">
      <SoIcon
        class="so-cell__left-icon"
        v-if="props.icon"
        :classPrefix="props.iconPrefix"
        :name="props.icon"
      />
    </slot>

    <div
      :class="['so-cell__title', props.titleClass]"
      v-if="slots.title || props.title"
      :style="props.titleStyle"
    >
      <slot name="title">
        <span v-if="props.title">{{ props.title }}</span>
      </slot>

      <div
        :class="['so-cell__label', props.labelClass]"
        v-if="slots.label || props.label"
      >
        <slot name="label">{{ props.label }}</slot>
      </div>
    </div>

    <div
      :class="['so-cell__value', props.valueClass]"
      v-if="slots.default || props.value"
    >
      <slot>
        <span>{{ props.value }}</span>
      </slot>
    </div>

    <slot name="right-icon">
      <SoIcon
        class="so-cell__right-icon"
        v-if="props.rightIcon"
        :classPrefix="props.iconPrefix"
        :name="props.rightIcon"
      />
    </slot>
  </div>
</template>

<script setup>
import { useSlots } from 'vue';
import { cellSharedProps } from './shared';

import SoIcon from '../Icon';

const props = defineProps({
  ...cellSharedProps
});

const emit = defineEmits(['click']);

const slots = useSlots();

const onClick = event => emit('click', event);
</script>
