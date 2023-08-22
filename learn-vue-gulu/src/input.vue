<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'

export default {
  components: {Icon},
  name: 'GuluInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import './var.scss';

.wrapper {
  font-size: $font-size; display: inline-flex; align-items: center;
  > :not(:last-child) {margin-right: .5em; }
  > input {
    height: $button-height; border: 1px solid $border-color; padding: 0 8px; border-radius: $border-radius; 
    font-size: inherit;
    &:hover { border-color: $border-color-hover; }
    &:focus { outline: none; box-shadow: inset 0px 0px 2px $box-shadow-color; }
    &[disabled], &[readonly] { border-color: #bbb; cursor: not-allowed; }
  }
  &.error {
    > input {
      border-color: $red;
      &:focus { box-shadow: inset 0px 0px 2px $red; }
    }
    .icon-error { fill: $red; }
    .errorMessage { color: $red; }
  }
}
</style>
