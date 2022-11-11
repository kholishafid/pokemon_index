import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Berries from "../pages/Berries.vue";
import BerriesSection from "../components/BerriesComponent/BerriesSection.vue";
import BerriesFlavor from "../components/BerriesComponent/BerriesFlavor.vue";
const BerriesFirmness = () =>
  import("../components/BerriesComponent/BerriesFirmness.vue");
import Game from "../pages/Game.vue";
import Item from "../pages/Item.vue";
import Moves from "../pages/Moves.vue";
import ItemByCategory from "../components/ItemComponents/ItemByCategory.vue";
import ItemSecton from "../components/ItemComponents/ItemSection.vue";
import GenerationSection from "../components/GamesComponents/GenerationSection.vue";
import GenerationList from "../components/GamesComponents/GenerationList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/berry",
      name: "berry",
      component: Berries,
      children: [
        {
          path: "allberries",
          name: "allberries",
          component: BerriesSection,
        },
        {
          path: "berryfirmness",
          name: "berryfirmness",
          component: BerriesFirmness,
        },
        {
          path: "berryflavor",
          name: "berryflavor",
          component: BerriesFlavor,
        },
      ],
    },
    {
      path: "/game/",
      name: "game",
      component: Game,
      children: [
        {
          path: "",
          name: "generationList",
          component: GenerationList,
        },
        {
          path: ":generation",
          name: "ganeration",
          component: GenerationSection,
        },
      ],
    },
    {
      path: "/item/",
      component: Item,
      children: [
        {
          path: "",
          name: "itemCategory",
          component: ItemSecton,
        },
        {
          path: ":category",
          name: "itembycategory",
          component: ItemByCategory,
        },
      ],
    },
    {
      path: "/move/",
      name: "move",
      component: Moves,
    },
  ],
});

export default router;
