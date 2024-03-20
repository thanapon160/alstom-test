import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CashDrawer from './components/CashDrawer.vue';
import FruitBucket from './components/FruitBucket.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/cash_drawer', component: CashDrawer },
    { path: '/fruit', component: FruitBucket }
  ]
});

createApp(App)
.use(router)
.mount('#app')
