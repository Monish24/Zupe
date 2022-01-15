<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  
})
export default class Home extends Vue {
  private exampleVar: ExampleTypeDefinition = "Hello";
  created():void {
    this.$router.push('/Home')
  }
}
</script>
