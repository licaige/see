<template>
  <div>
    <doc-example :code="code">
      <so-button type="primary">按钮</so-button>
      <so-button type="success">按钮</so-button>
      <so-button>按钮</so-button>
    </doc-example>
  </div>
</template>

<script setup>
import SoButton from 'packages/Button';
import 'packages/theme-chalk/src/button.scss';

const code = `
  <so-button type="primary">按钮</so-button>
  <so-button type="success">按钮</so-button>
  <so-button>按钮</so-button>`;
</script>

<style lang="scss" scoped></style>
