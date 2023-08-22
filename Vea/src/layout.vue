<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>


<script>

  export default {
    name: 'eLayout',

    data () {
      return {
        layoutClass: {   // class的对象语法
          hasSider: false
        }
      }
    },

    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'eSider') {
          this.layoutClass.hasSider = true
        }
      })
    }

  }
</script>

<style lang="scss" scoped>

.layout {
   
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.hasSider {
    flex-direction: row;
  }
   
}
  
</style>
