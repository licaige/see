<template>
  <div class="page-icon">
    <h3 class="comp-title">Icon 当前图标</h3>
    <div class="comp-wrap">
      <p class="code">
        &lt;<span class="name">so-icon</span>
        <span class="attr">name</span>=<span class="value"
          >"{{ current }}"</span
        >
        <span class="attr">size</span>=<span class="value">"30px"</span>
        /&gt;
      </p>
    </div>
    <h3 class="comp-title">Icon 内置图标</h3>
    <div class="comp-wrap">
      <div class="icon-row">
        <div
          class="icon-col"
          v-for="(icon, index) in glyphs"
          :key="index"
          @click="current = icon.name"
        >
          <so-icon :name="icon.name" size="30px" />
          <span>{{ icon.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SoIcon } from 'packages/index.js';

import { glyphs } from 'assets/json/iconfont.json';

const current = ref(glyphs[0] ? glyphs[0].name : 'name');
</script>

<style lang="scss" scoped>
.page-icon {
  .icon-row {
    display: flex;
    flex-wrap: wrap;

    .icon-col {
      flex: none;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      padding-top: 15px;
      width: 80px;
      border-radius: 3px;

      &:active {
        background-color: darken($background-color, 5%);
      }

      span {
        display: inline-block;
        margin-top: 10px;
        padding: 0 5px;
        min-height: 40px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
      }
    }
  }

  .code {
    color: $text-link-color;
    .name {
      & + .attr {
        margin-left: 5px;
      }
    }
    .attr {
      color: $text-secondary-color;
    }
    .value {
      color: $success-color;
      & + .attr {
        margin-left: 5px;
      }
    }
  }
}
</style>
