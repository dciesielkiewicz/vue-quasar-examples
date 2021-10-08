import { createApp } from "vue";
import { Quasar } from "quasar";
import VueToast from "vue-toast-notification";
import App from "./App.vue";
import router from "./router";
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(VueToast)
  .mount("#app");
