import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home/Home.vue";
import About from "@/views/about/About.vue";
import Contact from "@/views/contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
