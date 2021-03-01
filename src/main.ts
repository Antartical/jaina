import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import store from "./store";

import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Password from "primevue/password";

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .component("Password", Password)
  .mount("#app");
