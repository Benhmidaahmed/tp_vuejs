import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventListView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "EventDetailsView",
    props: true,
    component: () => 
      import("../views/EventDetailsView.vue"),
  },
  
  

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",

    component: () =>
      import("../views/ContactView.vue"),
  },











];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
