<template>
  <bp-pagination v-model:current="page" :total="30"> </bp-pagination>
</template>

<script setup lang="ts">
import { ref } from "vue";

const page = ref(1);
</script>
