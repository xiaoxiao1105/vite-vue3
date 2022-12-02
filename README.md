# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

├── dist/
└── src/
    ├── api/                       // 接口请求目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
       --- modules // 路由模块
       --- index.js  // 路由配置文件
    ├── store/                     // 状态管理目录
    	├── modules/  // 仓库模块
      ├── index.js  // 仓库配置文件
    ├── style/                     // 通用样式目录
        ├── variables.less  // 全局样式文件
    ├── utils/                     // 工具函数目录
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── tests/                         // 单元测试目录
├── index.html
├── jsconfig.json                  // JavaScript 配置文件
├── vite.config.js                 // Vite 配置文件
└── package.json
