import Vue from "vue";
import Vuex from "vuex";
import { createProxy, extractVuexModule } from "vuex-class-component";
import { DemoStore } from "./Demo";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(DemoStore)
  }
})

// Creating proxies.
export const vxm = {
  demo: createProxy(store, DemoStore),
}
