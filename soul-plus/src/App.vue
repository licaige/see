<template>
  <router-link to="/">
    <section class="ui-face">
      <h1>SoulPlus</h1>
      <p class="secondary">Mobile UI Components built on Vue3</p>
    </section>
  </router-link>

  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const transitionName = ref();

const splitAndTrim = path => {
  let thePath = path?.split('/') || [];
  return thePath.filter(str => !!str);
};

watch(
  () => route.path,
  (toPath, fromPath) => {
    const toDepth = splitAndTrim(toPath);
    const fromDepth = splitAndTrim(fromPath);
    transitionName.value =
      toDepth.length < fromDepth.length ? 'slide-right' : 'slide-left';
  }
);
</script>

<style lang="scss" scoped>
.ui-face {
  padding: 40px 20px;
  color: $text-color;
  h1 {
    font-size: $font-size-xl;
    font-weight: normal;
  }
  &:hover {
    color: $text-link-color;
  }
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
