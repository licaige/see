import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'
import libInjectCss from './libInjectCss'
import PurgeIcons from 'vite-plugin-purge-icons'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@/example': path.join(__dirname, 'example/'),
      '@/package': path.join(__dirname, 'package/'),
      '@/types': path.join(__dirname, 'types/')
    }
  },
  plugins: [
    vue(),
    PurgeIcons(),
    libInjectCss(),
    dts()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './package/index.ts'),
      name: 'PurgeIconVue3',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `purge-icon-vue3.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue'
        }
      }
    }
  }
})
