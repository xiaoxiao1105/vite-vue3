import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import TDesign from 'tdesign-vue-next';
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);

app.use(router); //文件中挂载路由配置
app.use(store); // 文件中挂载Pinia 配置
app.use(TDesign); //  TDesign Vue Next 组件库
app.mount('#app');
