import { createApp } from 'vue';
import App from './App.vue';

import 'packages/theme-chalk/src/index.scss';
import './style/global.scss';

import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
