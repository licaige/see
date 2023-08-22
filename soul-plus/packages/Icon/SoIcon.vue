<template>
  <i
    :class="[classPreName, `${classPreName}-${props.name}`]"
    :style="{
      color: props.color,
      fontSize: props.size
    }"
  ></i>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: String,
  color: String,
  size: String,
  classPrefix: String
});

const classPreName = computed(() => props.classPrefix || 'so-icon');
</script>
