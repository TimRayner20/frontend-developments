import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAnglesRight,
  faBarsStaggered,
  faBatteryFull,
  faEarthAmericas,
  faIndustry,
  faLeaf,
  faSolarPanel,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(
  faBarsStaggered,
  faSolarPanel,
  faSun,
  faEarthAmericas,
  faIndustry,
  faBatteryFull,
  faLeaf,
  faAnglesRight
);

const app = createApp(App)
  .use(router)
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
