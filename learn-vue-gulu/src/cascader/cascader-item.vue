<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <l-cascader-item
      v-if="sourceItem.children && sourceItem.children.length > 0"
      v-for="item in sourceItem.children"
      :source-item="item">
    </l-cascader-item>
  </div>
</template>

<script>
export default {
  name: 'LCascaderItem',
  props: {
    sourceItem: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.cascaderItem {
  border: 1px solid red;
  padding: 10px;
}
</style>
