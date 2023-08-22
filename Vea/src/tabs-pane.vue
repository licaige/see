<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: "eTabsPane",
  inject: ["eventBus"],

  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },

  data() {
    return {
      active: false
    };
  },

  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = (name === this.name);
    });
  }
};
</script>


<style lang="scss" scoped>

.tabs-pane {
  padding: 1em;
  &.active {
    background: red;
  }
}

</style> 