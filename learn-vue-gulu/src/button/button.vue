<template>
  <button class="l-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <l-icon class="icon loading" v-if="loading" name="loading"></l-icon>
    <l-icon class="icon" v-if="icon && !loading" :name="icon"></l-icon>
    <div class="l-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './../icon'
export default {
  components: {
    'l-icon': Icon
  },
  // props: ['icon', 'icon-position']
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../var.scss';

@keyframes spin {
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
}
.l-button {
  font-size: $font-size; height: $button-height; padding: 0 1em;
  border-radius: $border-radius; border: 1px solid $border-color;
  background: $button-bg; vertical-align: middle;
  display: inline-flex; justify-content: center; align-items: center;
  &:hover { border: 1px solid $border-color-hover; }
  &:active { background: $button-active-bg; }
  &:focus { outline: none; }
  > .icon { order: 1; margin-right: .2em; }
  > .l-button-content { order: 2; }
  &.icon-right {
    > .icon { order: 2; margin-right: 0; margin-left: .2em;}
    > .l-button-content { order: 1; }
  }
  .loading { animation: spin 2s infinite linear; }
  &[disabled] { cursor: not-allowed; }
}
</style>
