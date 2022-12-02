import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://cn.vitejs.dev/config
export default defineConfig({
  base: './', // 公共基础路径
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
    Components({
      resolvers: [
        TDesignResolver({
          library: 'vue-next',
        }),
      ],
    }),
  ], // 需要用到的插件数组
  resolve: {
    // 当使用文件系统路径的别名时，请始终使用绝对路径
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // 服务端
  server: {
    host: '0.0.0.0', // 默认localhost
    port: 3000, // 端口3000
    strictPort: true, // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    https: false, // 是否开启https
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {}, // 自定义代理
  },
  // 构建选项
  build: {
    target: 'es2015', // 设置最终构建的浏览器兼容目标
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`,
        },
        math: 'strict',
        javascriptEnabled: true,
      },
    },
  },
});
