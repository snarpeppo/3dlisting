import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Queue from "../views/Queue.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/submission",
    name: "Submission",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Submission.vue"),
  },
  {
    path: "/queue",
    name: "queue",
    component: Queue,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
