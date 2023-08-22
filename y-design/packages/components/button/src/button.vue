<script lang="ts" setup>
import '../../theme/src/button.scss'
// @ts-ignore
defineOptions({ name: 'YButton' })

import { computed } from 'vue'
import { buttonProps } from './button'

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

const computedCls = computed(() => {
  const { type, disabled, loading, round, size, plain } = props
  return [
    'y-button',
    `y-button-${type}`,
    `y-button-${size}`,
    {
      'y-button-disabled': disabled || loading,
      'y-button-plain': plain,
      'y-button__round': round,
    },
  ]
})
const iconColor = computed(() => {
  if (!props.type || props.type === 'default') return ''
  return '#ffffff'
})

const onClick = () => {
  emits('click')
}

defineExpose({
  /** @description button type */
  type: props.type,
})
</script>
<template>
  <button :class="computedCls" @click="onClick" :disabled="props.disabled">
    <span class="y-button__inner">
      <!-- <y-icon v-if="icon" :name="props.icon" :color="iconColor"></y-icon> -->
      <!-- <y-icon v-if="loading" name="loading" :color="iconColor" class="loading-icon"></y-icon> -->
      <slot></slot>
    </span>
  </button>
</template>
