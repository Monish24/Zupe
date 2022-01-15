<template>
  <div class="appContainer">
    <div class="main-content">
      <transition name="slide-fade">
          <router-view >
            
          </router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'

@Component({})
export default class DefaultLayout extends Vue {
}
</script>
