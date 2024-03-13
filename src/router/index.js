import { createRouter, createWebHistory } from "vue-router";

import PokemonList from "../views/PokemonList.vue";
import PokemonDetailPage from "../views/PokemonDetailPage.vue";
import MyCollection from "../views/MyCollection.vue"
import HomeView from "../views/HomeView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pokemon",
      name: "pokemon",
      component: PokemonList,
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pokemon/:id",
      name: "detail-page",
      component: PokemonDetailPage,
    },
    {
      path: "/my-collection",
      name: "my-collection",
      component: MyCollection
    },
  ],
});

export default router;
