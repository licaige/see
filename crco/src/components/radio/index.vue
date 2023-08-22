<template>
  <a-radio-group
    v-model="myValue"
    :type="option.radioType === 'radio' ? 'radio' : 'button'"
    :disabled="myOption.disabled"
    :size="myOption.size"
    :direction="myOption.direction"
  >
    <a-radio :value="item[fieldNames.value]" v-for="(item, index) in dicData" :key="index">{{
      item[fieldNames.label]
    }}</a-radio>
  </a-radio-group>
</template>

<script setup lang="ts">
import { RadioGroup as ARadioGroup, Radio as ARadio } from '@arco-design/web-vue'
import useSelect from '../_hooks/use-select'
import { RadioType } from '../../types/components/radio'

const props = defineProps<{
  option: RadioType & { [propName: string]: any }
  modelValue?: string | number | boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', val: string | number | boolean | undefined): void
  (event: 'update-form', val: any): void
  (event: 'change', val: string | number | boolean | undefined): void
}>()

const { dicData, myOption, fieldNames, myValue } = useSelect(props, emit)
</script>
