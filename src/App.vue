<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


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
  background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}
</style>

