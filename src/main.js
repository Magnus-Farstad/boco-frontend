import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyC3ODA_2JmqfmDOMPBV4nJhBgma3gFRSCc",
    },
    autobindAllEvents: true,
  })
  .mount("#app");
app.component("Date-picker", Datepicker);
