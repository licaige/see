<template>
  <div
    class="tabs-item"
    @click="onClick"
    :class="classes"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsItem",
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => { // 在同一个事件中心上监听此事件
        this.active = name === this.name
      })
    }
  },
  methods: {
    onClick() {
      if (this.disabled) { return }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this) // 在事件中心 emit 一个事件
      this.$emit('click', this) // 方便测试
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../var.scss";

.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>