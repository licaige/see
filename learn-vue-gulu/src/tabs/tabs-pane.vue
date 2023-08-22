<template>
  <div
    class="tabs-pane"
    :class="classes"
    v-if="active"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabsPane",
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  inject: ['eventBus'],
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
  padding-left: 1em;
  padding-top: 0.5em;
  &.active {
  }
}
</style>