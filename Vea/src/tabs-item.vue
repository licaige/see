<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "eTabsItem",
  inject: ["eventBus"],

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    name: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    }
  },

  data() {
    return {
      active: false
    };
  },

  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>


<style lang="scss" scoped>
$blue: #409eff;
$disabled-text-color: grey;

.tabs-item {
  height: 100%;
  flex-shrink: 0;
  padding: 0 1em;

  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    color: $blue;
    font-weight: bold;
    // outline: 1px solid red;
  }

  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }
}
</style>