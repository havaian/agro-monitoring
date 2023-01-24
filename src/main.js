import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/main';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_backend_api_link;

const app = createApp(App);
app.use(router);
app.mount('#app');