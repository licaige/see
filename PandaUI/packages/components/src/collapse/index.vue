<template>
  <div class="pd-collapse" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { collapseProps } from "./types";
const props = defineProps(collapseProps);
</script>
