import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Biblioteca from "../views/Biblioteca.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/biblioteca", component: Biblioteca },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
