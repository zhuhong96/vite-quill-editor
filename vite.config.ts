import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import path from "path" // 需安装此模块

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx({})],
  resolve: {
    alias: {
      // 这里就是需要配置resolve里的别名
      "@": path.join(__dirname, "./package") // path记得引入
    }
  },
  esbuild: {
    drop: ['console', 'debugger']
  },
  build: {
    outDir:'dist/lib',
    assetsDir:'assets',
    sourcemap:false,
    lib:{
      name:'vite-quill-editor',
      entry: resolve(__dirname, 'package/index.ts'),
      fileName:'vite-quill-editor'
      // fileName: (format) => `vite-quill-editor.${format}.js`, // 打包文件的名字
    },
    rollupOptions:{
      // 确保外部化处理那些你不想打包进库的依赖
      external:['vue'],
      output:{
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        exports: 'named',
        externalLiveBindings:false,
        globals:{
          vue:'Vue'
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false
      }
    },
    // cssCodeSplit:true
  }
})
