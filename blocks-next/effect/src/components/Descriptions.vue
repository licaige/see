<script lang="ts" setup>
  import { ref } from 'vue'

  const size = ref('large')

  // setTimeout(() => {
  //   size.value = 'large'
  // }, 1000);
</script>

<template>
  <div>
    <bn-descriptions :column="2" size="large"  direction="vertical">
      <bn-descriptions-item
        label="label"
        value="value"
        label-class-name="test-label"
        value-class-name="test-value"
        align="center"
        label-align="center"
      >
      value slot
      <template #label>
        label slot
      </template>

      </bn-descriptions-item>
      <bn-descriptions-item
        label="label"
        value="value"
        label-class-name="test-label"
        value-class-name="test-value"
      >
      </bn-descriptions-item>

    </bn-descriptions>
  </div>
</template>

<style lang="scss">
  // .test-label {
  //   height: 60px;
  // }
</style>
