<script lang="ts" setup>
  import { ref } from 'vue'
  const visible1 = ref(false)
  const visible2 = ref(false)

  const handler1 = () => {
    visible1.value = true
  }

  const handler2 = () => {
    visible2.value = true
  }
</script>

<template>
  <bn-space>
    <bn-button size="small" @click="handler1">默认插槽</bn-button>
    <bn-button size="small" @click="handler2">其他插槽</bn-button>
  </bn-space>

  <bn-drawer v-model="visible1">
    <div>
      直接使用默认插槽会
      <span style="color: red">覆盖</span>
      其余插槽!
    </div>
  </bn-drawer>

  <bn-drawer v-model="visible2">
    <template #title> title slot </template>
    <template #body> body slot </template>
    <template #footer="{ ok, cancel, loadingObj }">
      <bn-space>
        <bn-button :loading="loadingObj.ok" type="success" @click="ok">OK</bn-button>
        <bn-button type="danger" :loading="loadingObj.cancel" @click="cancel">Cancel</bn-button>
      </bn-space>
    </template>
  </bn-drawer>
</template>

<style lang="scss"></style>
