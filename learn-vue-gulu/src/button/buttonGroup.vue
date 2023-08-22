<template>
  <div class="l-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`l-button-group 的子元素应该全是 l-button ，而你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../var.scss';

.l-button-group { display: inline-flex; vertical-align: middle;
  > .l-button {
    border-radius: 0;
    &:not(:first-child) { margin-left: -1px; }
    &:hover { position: relative; z-index: 1;}
    &:first-child {
      border-bottom-left-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }
    &:last-child {
      border-bottom-right-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
}
</style>
