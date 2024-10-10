import { createApp } from 'vue';
import Popup from './Popup.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(Popup);
app.use(Antd);
app.mount('#app');