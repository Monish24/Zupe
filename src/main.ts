import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router/index";
import { store } from "@/store";
import "@/assets/css/styles.scss";
import "@/plugins/fitty"



Vue.prototype.$mapFields = Vue;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
