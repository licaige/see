<template>
  <div class="wrap">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${iconName}`" />
    </svg>
  </div>
</template>

<script>

import "./svg"

export default {
  props: {
    iconName: String,
  },

};
</script>

<style scoped lang="scss">

.wrap {
  display: inline-flex;
  vertical-align: middle;
}

.icon {
  width: 1em;
  height: 1em;
  // vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
