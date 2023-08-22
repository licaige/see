import { createApp } from 'vue';
import App from './App.vue';

// import TUI from '../packages/index';
import TUI from 'skybiu-ui';

const app = createApp(App);
app.use(TUI);
app.mount('#app')