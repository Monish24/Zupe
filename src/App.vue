<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import 'animate.css';

@Component({
  name: "App",
})
export default class App extends Vue {
}
</script>

<style >
#app{
  text-align: center;
}

body{
  /* background: linear-gradient(to bottom, #D6E1ED, #DEE0F1); */
  /* background: #2e2a3a; */
  background: #2e2a3a;
  /* overflow-y: hidden !important; */
}

* { margin: 0 !important; }
</style>

