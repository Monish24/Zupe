<template>
    <div class="playerBox">

    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Navbar",
})
export default class songplaybar extends Vue {

}
</script>

<style>

.playerBox{
  width: 1920px;
  height: 90px;
  background: #17151c;
  position: fixed;
  top: 879px;
  left: 0px;
  z-index: 30;
}

</style>
