<script lang="ts">
  import { defineComponent } from 'vue'
  import { getComponentNamespace } from '../../../utils/global-config'

  export default defineComponent({
    name: getComponentNamespace('ButtonGroup')
  })
</script>

<template>
  <div class="bn-button-group">
    <slot></slot>
  </div>
</template>
