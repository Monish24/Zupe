<template>
<div id='player1'>
    <div @click="this">YOOOOOOOOOOOOOO</div>
<iframe type="text/html" width="0px" height="0px" src="https://www.youtube.com/embed/DkzG2IV8vms?autoplay=1" frameborder='0' allow='autoplay'></iframe>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import YouTubeIframeLoader from 'youtube-iframe'

import { Component } from "vue-property-decorator";

@Component({
  
})

export default class test extends Vue{
    
    private this() {
        YouTubeIframeLoader.load(function(YT) {
    new YT.Player('player1', {
        height: '390',
        width: '640',
        videoId: 'DkzG2IV8vms',
        autoplay: 1,
        allow: 'autoplay'
    });
});
  }
}

</script>