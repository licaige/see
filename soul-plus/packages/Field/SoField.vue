<template>
  <div
    class="so-field"
    :class="{
      'so-field--center': props.center,
      'so-field--clickable': props.clickable
    }"
    @click="onClick"
  >
    <slot name="left-icon">
      <div class="so-field__left-icon" v-if="props.leftIcon">
        <SoIcon
          :classPrefix="props.iconPrefix"
          :name="props.leftIcon"
          :size="props.iconSize"
        />
      </div>
    </slot>

    <div
      class="so-field__label"
      v-if="props.label || slots.label"
      :class="[
        { 'so-field__label--required': props.required },
        props.labelClass
      ]"
      :style="{ width: props.labelWidth, textAlign: props.labelAlign }"
    >
      <slot name="label">
        {{ props.label }}
      </slot>
    </div>

    <div class="so-field__value">
      <div class="so-field__body">
        <div v-if="slots.input" class="so-field__control">
          <slot name="input"></slot>
        </div>

        <template v-else>
          <textarea
            v-if="type === 'textarea'"
            class="so-field__control"
            v-bind="inputAttrs"
          ></textarea>

          <input
            v-else
            class="so-field__control"
            v-bind="inputAttrs"
            :type="props.type || 'text'"
          />
        </template>

        <div
          class="so-field__clear"
          v-if="initRenderClear"
          v-show="showClear"
          @touchstart="onClear"
          @mousedown="onClear"
        >
          <SoIcon name="clear" :size="props.iconSize" />
        </div>

        <slot name="right-icon">
          <div class="so-field__right-icon" v-if="props.rightIcon">
            <SoIcon
              :classPrefix="props.iconPrefix"
              :name="props.rightIcon"
              :size="props.iconSize"
            />
          </div>
        </slot>
      </div>

      <div class="so-field__limit" v-if="props.showLimit && props.maxlength">
        {{ valueLength }}/{{ props.maxlength }}
      </div>

      <div
        class="so-field__error-message"
        v-if="state.validateMessage || props.errorMessage"
      >
        {{ state.validateMessage || props.errorMessage }}
      </div>
    </div>

    <slot name="extra"></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<script setup>
import {
  ref,
  useAttrs,
  computed,
  reactive,
  useSlots,
  watch,
  onMounted,
  nextTick
} from 'vue';
import { trigger, resizeTextarea } from '../utils';
import { useTruthy } from '../hooks';

import SoIcon from '../Icon';

const props = defineProps({
  modelValue: [Number, String],
  label: String,
  name: String,
  type: String, // tel digit number textarea password
  placeholder: String,
  autocomplete: String,
  autofocus: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  maxlength: [Number, String],
  rows: [Number, String],

  center: Boolean,
  clickable: Boolean,
  clearable: Boolean,
  autosize: [Boolean, Object],
  showLimit: Boolean,

  formatter: Function,
  formatTrigger: { type: String, default: 'change' },
  required: Boolean,
  errorMessage: String,
  rules: [Array, Object],

  labelClass: [String, Array, Object],
  labelWidth: String,
  labelAlign: String, // left center right

  iconPrefix: String,
  iconSize: { type: String, default: '16px' },
  leftIcon: String,
  rightIcon: String
});

const emit = defineEmits([
  'update:modelValue',
  'click',
  'blur',
  'focus',
  'keypress',
  'clear',
  'click-input'
]);

const attrs = useAttrs();
const slots = useSlots();

const initRenderClear = useTruthy(() => props.clearable);

const inputRef = ref();

const state = reactive({
  focused: false,
  validateFailed: false,
  validateMessage: ''
});

const getModelValue = () => String(props.modelValue ?? '');

const valueLength = computed(() => {
  return getModelValue().length;
});

const showClear = computed(() => {
  return (
    props.clearable &&
    !props.readonly &&
    state.focused &&
    getModelValue() !== ''
  );
});

const updateValue = (value, trigger = 'change') => {
  if (props.formatter && trigger === props.formatTrigger) {
    value = props.formatter(value);
  }

  // input text upd
  if (inputRef.value && inputRef.value.value !== value) {
    inputRef.value.value = value;
  }

  if (value !== props.modelValue) {
    emit('update:modelValue', value);
  }
};

const resizeTextareaSize = () => {
  const input = inputRef.value;
  if (!(props.type === 'textarea' && props.autosize && input)) return;

  resizeTextarea(input, props.autosize);
};

// -s validate rules -

const resetValidation = () => {
  if (!state.validateFailed) return;
  state.validateFailed = false;
  state.validateMessage = '';
};

const validate = rules => {
  resetValidation();
  if (!rules || !rules.length) return;

  let validValue = getModelValue();

  for (let rule of rules) {
    // required
    if (rule.required && validValue == '') {
      state.validateFailed = true;
      state.validateMessage = rule.message || '';
      return;
    }

    // validator
    if (rule.validator) {
      let result = rule.validator(validValue, rule);
      let isResStr = typeof result === 'string';
      if (isResStr || result === false) {
        state.validateFailed = true;
        state.validateMessage = (isResStr ? result : rule.message) || '';
        return;
      }
    }
    // pattern
    else if (rule.pattern) {
      let reg = new RegExp(rule.pattern);
      if (reg && !reg.test(validValue)) {
        state.validateFailed = true;
        state.validateMessage = rule.message || '';
        return;
      }
    }
  }
};

const validateWithTrigger = trigger => {
  if (!props.rules) return;

  let validRules = []
    .concat(props.rules)
    .filter(rule => trigger === (rule.trigger || 'blur'));

  if (validRules.length) validate(validRules);
};

// -end validate rules -

// -s input events -

const onClick = event => emit('click', event);

const onClear = event => {
  event.stopPropagation();
  emit('update:modelValue', '');
  emit('clear', event);
};

const onBlur = event => {
  state.focused = false;
  updateValue(getModelValue(), 'blur');
  emit('blur', event);
  validateWithTrigger('blur');
};

const onFocus = event => {
  state.focused = true;
  emit('focus', event);
};

const onInput = event => {
  if (!event.target?.composing) {
    updateValue(event.target?.value);
  }
};

const onClickInput = event => emit('click-input', event);

const onKeypress = event => emit('keypress', event);

const startComposing = event => {
  if (event.target) event.target.composing = true;
};

const endComposing = event => {
  if (event.target?.composing) {
    event.target.composing = false;
    trigger(event.target, 'input');
  }
};

const inputAttrs = computed(() => {
  return {
    ...attrs,
    ref: inputRef,
    name: props.name,
    rows: props.rows !== undefined ? +props.rows : undefined,
    value: props.modelValue,
    disabled: props.disabled,
    readonly: props.readonly,
    maxlength: props.maxlength,
    autofocus: props.autofocus,
    placeholder: props.placeholder,
    autocomplete: props.autocomplete,
    onBlur,
    onFocus,
    onInput,
    onClick: onClickInput,
    onChange: endComposing,
    onKeypress,
    onCompositionstart: startComposing,
    onCompositionend: endComposing
  };
});

// -end input events -

watch(
  () => props.modelValue,
  () => {
    updateValue(getModelValue());
    resetValidation();
    validateWithTrigger('change');
    nextTick(resizeTextareaSize);
  }
);

onMounted(() => {
  updateValue(getModelValue(), props.formatTrigger);
  nextTick(resizeTextareaSize);
});
</script>
