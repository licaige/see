<template>
  <div class="wrapper">

    <input type="text" class="input"
           :class="{error: errorMsg}"
           :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event)"
           @input="$emit('input', $event)"
           @focus="$emit('focus', $event)"
           @blur="$emit('blur', $event)"
    />

    <template v-if="errorMsg">
      <icon iconName="error" class="icon-error"></icon>
      <span class="errorMessage">{{errorMsg}}</span>
    </template>


  </div>
</template>


<script>

  import Icon from './icon'


  export default {
    name: 'eInput',

    components: {Icon},

    props: {
      value: String,
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      errorMsg: {
        type: String,
        default: ''
      },


    }
  }
</script>

<style lang="scss" scoped>
  /*
  --button-height: 32px;
   --font-size: 14px;
   --button-bg: white;

   --border-color: #999;
   --border-radius: 4px;
   --color: #333;

   --border-color-hover: #666;
   --button-active-bg: #eee;
   */
 
  $height: 32px;
  $border-color: #999;
  $border-radius: 4px;
  $font-size: 12px;

  $border-color-hover: #666;
  $box-shadow-color: rgba(0, 0, 0, 0.5);

  $error-color: #F1453D;

  .wrapper {
    font-size: $font-size;
    display: inline-block;

    .input {
      padding: 0 8px;
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      font-size: inherit;

      &:hover { border-color: $border-color-hover; }
      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }

      &[disabled], &[readonly] {border-color: #bbb; color: #bbb; cursor: not-allowed;}

      &.error {border-color: $error-color;}

    }

    .icon-error { fill: $error-color; }
    .errorMessage { color: $error-color; }

  }


</style>
