## rollup+vue3 开发脚手架

用于学习目的。实际开发请使用 vite 开发，另一个仓库[vite+vue3 开发模版](https://gitee.com/ngd_b/vue3-vite)

## 关于搭建过程详见文章

[初识 rollup 打包、配置 vue 脚手架](https://juejin.cn/post/7208508980161855548)

## 搭建周边

安装 vue-router、vuex、element-UI、axios

```shell
$> npm i vue-router@4 vuex@next element-plus axios --save
```

1. `index.html` 变更，sript 增加`type="module"`
2. `@element-plus/icons-vue`不用安装，安装 element-plus 已经安装了，直接食用

   ```vue
   <script setup>
   import { House, UserFilled, Collection } from "@element-plus/icons-vue";
   </script>
   ```

3. `<router-view></router-view>`
