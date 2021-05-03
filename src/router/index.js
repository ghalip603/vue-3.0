import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import BlogDetail from "../views/BlogDetail.vue";
import Service from "../views/Service.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/Blog/:id",
    name: "BlogDetail",
    component: BlogDetail,
  },

  {
    path: "/Service",
    name: "Service",
    component: Service,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
