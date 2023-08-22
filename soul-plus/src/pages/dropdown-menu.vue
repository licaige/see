<template>
  <div class="page-dropdown-menu">
    <h3 class="comp-title">下拉菜单 [待重构]</h3>

    <so-dropdown-menu ref="dropdownRef">
      <so-dropdown-item :title="state.itemTitle1">
        <div class="content">
          <p
            v-for="n in 5"
            :key="n"
            @click="clickCell(`商品${n}`, 'itemTitle1')"
          >
            商品{{ n }}
          </p>
        </div>
      </so-dropdown-item>
      <so-dropdown-item :title="state.itemTitle2">
        <div class="content">
          <p
            v-for="n in 7"
            :key="n"
            @click="clickCell(`排序${n}`, 'itemTitle2')"
          >
            排序{{ n }}
          </p>
        </div>
      </so-dropdown-item>
    </so-dropdown-menu>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

import { SoDropdownMenu, SoDropdownItem } from 'packages/index.js';

const state = reactive({
  itemTitle1: '全部商品',
  itemTitle2: '排序'
});
const dropdownRef = ref();

const clickCell = (title, attr) => {
  state[attr] = title;
  dropdownRef.value?.toggleItem(-1);
};
</script>

<style lang="scss" scoped>
.content {
  padding: 10px 20px;
}
</style>
