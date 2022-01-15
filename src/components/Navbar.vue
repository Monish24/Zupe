<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/Home">Home2</router-link>
    |
    <a target="_blank" href="https://github.com/Vue-Boilerplates">GitHub</a>
    |
    <a
      target="_blank"
      href="https://github.com/Vue-Boilerplates/vue-typescript-boilerplate"
      >v1.0.0</a
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
})
export default class Navbar extends Vue {}
</script>
