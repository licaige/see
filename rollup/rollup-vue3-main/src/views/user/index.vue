<template>
  <div class="user">
    <h2>User-center</h2>

    <h2>JSX 表达式，lazy-select组件</h2>
    <IFunLazySelect :data="data" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          value: "1",
          label: "admin",
        },
        {
          value: "2",
          label: "test",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.user {
}
</style>
