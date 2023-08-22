<template>
  <div class="cascader">
    <slot></slot>
    <div class="popover">
      <div v-for="item in dataSource">
        <l-cascader-item :source-item="item"></l-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import LCascaderItem from './cascader-item'

export default {
  name: 'LCascader',
  components: {
    LCascaderItem
  },
  props: {
    dataSource: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
