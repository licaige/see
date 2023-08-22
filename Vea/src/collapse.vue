<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>
import Vue from "vue";
export default {
  name: "eCollapse",

  props: {
    selected: Array,
    single: Boolean
  },

  data() {
    return {
      eventBus: new Vue()
    };
  },

  provide() {
    return {
      eventBus: this.eventBus
    };
  },

  mounted() {
    this.showDefault();
    this.onClickItem();
  },

  methods: {
    showDefault() {
      this.eventBus.$emit("showDefault", this.selected);
    },

    onClickItem() {
      let selected = JSON.parse(JSON.stringify(this.selected));

      this.eventBus.$on("closeItem", curValue => {
        let index = selected.indexOf(curValue);
        selected.splice(index, 1);

        this.eventBus.$emit("updateItem", selected);
        this.$emit("update:selected", selected);
      });

      this.eventBus.$on("showItem", curValue => {
        if (this.single) {    // 手风琴模式
          selected = [];
          selected.push(curValue);
        } else {
          selected.push(curValue);
          selected = [...new Set(selected)];
        }

        this.eventBus.$emit("updateItem", selected);
        this.$emit("update:selected", selected);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
