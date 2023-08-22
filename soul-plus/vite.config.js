import vue from '@vitejs/plugin-vue';
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      style: resolve('src/style'),
      packages: resolve('packages'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'packages/theme-chalk/src/common/var.scss';`,
      },
    },
  },
  build: {
    input: {
      main: path.resolve(__dirname, 'index.html'),
    },
    rollupOptions: {},
  },
};
