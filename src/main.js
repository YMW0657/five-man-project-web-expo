
import { createApp } from 'vue'

import 'jquery'
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import router from './router'
// import "@/assets/js/all.js"
import "@/assets/css/font.css"
import "@/assets/css/font1.css"
import "@/assets/css/styles.css"


const app = createApp(App)

app.use(router)

app.mount('#app');
