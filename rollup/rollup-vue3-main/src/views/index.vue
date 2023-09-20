<template>
  <div class="app-container height-100">
    <el-container class="height-100">
      <el-header>Rollup-vue3 脚手架</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            @select="handleSelectMenu"
          >
            <el-menu-item index="main">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="user">
              <el-icon><UserFilled /></el-icon>
              <span>用户</span>
            </el-menu-item>
            <el-menu-item index="blog">
              <el-icon><Collection /></el-icon>
              <span>CNode-博客</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { House, UserFilled, Collection } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
let activeMenu = ref("main");

onMounted(() => {
  // 挂载
  activeMenu.value = route.name;
});
/**
 *
 */
const handleSelectMenu = (index, idexPath, item) => {
  activeMenu.value = index;
  router.push({ name: index });
};
</script>
<style lang="less" scoped>
.app-container {
  .el-header {
    background: #003eb3;
    color: #fff;
    font-size: 20px;
    display: flex;
    height: 60px;
    align-items: center;
  }
  .el-container {
    overflow: hidden;
    .el-container {
      height: calc(100% - 60px);
    }
    .el-main {
      height: 100%;
      overflow: auto;
    }
    .el-aside {
      background: #0958d9;
      color: #fff;
      height: 100%;
      overflow: auto;
      .el-menu {
        background: #0958d9;
        border: none;
        .el-menu-item {
          color: #fff;
          &:hover {
            background: #4096ff;
          }
          &.is-active {
            background: #001d66;
          }
        }
      }
    }
  }
}
</style>
