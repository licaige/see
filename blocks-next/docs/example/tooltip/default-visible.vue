<script lang="ts" setup>
  import { ref } from 'vue'
  const visible = ref(true)

  const content = ref('This is a Tooltip')
</script>

<template>
  <div>
    <bn-tooltip v-model="visible" :content="content">
      <bn-button size="small">默认显示</bn-button>
    </bn-tooltip>
  </div>
</template>

<style lang="scss"></style>
