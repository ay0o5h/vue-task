import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createApp } from 'vue';
import VueStarRating from 'vue-star-rating';
import App from './views/App.vue';

createApp(App).mount('#app')
App.use(Antd);
App.component('star-rating', VueStarRating.default)