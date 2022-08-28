import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { TroisJSVuePlugin } from "troisjs";

import "./index.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(TroisJSVuePlugin);

app.mount("#app");
