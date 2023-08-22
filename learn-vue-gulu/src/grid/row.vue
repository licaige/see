<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluRow',
  props: {
    gutter: [Number, String],
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter/2 + 'px',
        marginRight: -gutter/2 + 'px'
      }
    },
    rowClass() {
      let {align} = this
      return [align && `align-${align}`]
    }
  },
  mounted() {
    if (this.gutter) {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
    
  }
}
</script>

<style lang="scss" scoped>
.row {
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
  &.align-left {
    justify-content: flex-start;
  }
}
</style>
