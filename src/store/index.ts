import Vue from "vue";
import Vuex from "vuex";
import { createProxy, extractVuexModule } from "vuex-class-component";
import { playerStore } from "./player";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(playerStore)
  }
})

// Creating proxies.
export const vxm = {
  playerStore: createProxy(store, playerStore),
}
