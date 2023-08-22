<template>
  <div class="e-button-group">
    <slot />
  </div>
</template>


<script>
export default {
  methods: {
    checkEleType() {
      for (let ele of this.$el.children) {
        // ele是DOM元素

        let eleName = ele.nodeName.toLowerCase();
        if (eleName !== "button") {
          console.warn(
            `e-button-group只能使用e-button, 而你使用的元素是${eleName}`
          );
        }
      }
    }
  },

  mounted() {
    this.checkEleType();
  }
};
</script>

<style scoped lang="scss">
.e-button-group {
  display: inline-flex;
  vertical-align: middle;

  .e-button {
    /* 仅首尾按钮是 圆角 + 隐藏重合border边框*/
    border-radius: 0;

    & :not(:first-child) {
      /*隐藏边框时，首个元素不需要偏移*/
      margin-left: -1px;
    }

    &:hover {
      /* hover时显示 隐藏的重合border边框*/
      position: relative;
      z-index: 1;
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>
