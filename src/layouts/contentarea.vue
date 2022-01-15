<template>
  <div class="appContainer">
    <div class="main-content">
      <transition name="slide-fade">
          <router-view >
            
          </router-view>
      </transition>
      <sidebar1></sidebar1>
      <songplaybar></songplaybar>
      <sidebar2></sidebar2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import sidebar1 from '@/components/sidebar1.vue'
import songplaybar from '@/components/songplaybar.vue'
import sidebar2 from '@/components/sidebar2.vue'

@Component({
  components: { sidebar1,songplaybar,sidebar2}
})
export default class contentarea extends Vue {
  
}
</script>

<style>

</style>
