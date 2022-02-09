<template>
  <div class="bg">
      <div class="bgblur" v-bind:style="{ backgroundImage: 'url(' + resplaylistsdetails.images[0].url + ')' }">
      </div>
      <div class="upper-container">
        <div class="outer-info-container"> 
          <div class="inner-img-container">
            <img :src="resplaylistsdetails.images[0].url" height="240px" width="240px" alt="">
          </div>
          <div class="inner-info-container">
            <div class="title-txt-inner">
              {{ resplaylistsdetails.name }} - {{ resplaylistsdetails.owner.display_name }}
            </div>
            <div class="genre-releasedate"> 
            {{ capitalizeFirstLetter(resplaylistsdetails.type) }} • {{resplaylistsdetails.tracks.total}} songs
            </div>
            <div class="sub-txt-inner">
              <span>{{ resplaylistsdetails.description }}</span>
            </div>
          </div>  
        </div>
        <div class="buttons-upper">
          <button class="playbutton"><img src="@/assets/img/playtriangle.png" height="60px" width="60px" alt=""></button>
          <button class="playbutton"><img src="@/assets/img/shuffle.png" height="48px" width="48px" alt=""></button>
          <div class="albums-options">
            •••
          </div>
        </div>
      </div>
      <div class="bottom-container">
        <div class="titles-for-trackcard">
          <div class="trackcard">
            <div class="wrapper">
              <div class="indexno2">  
                <span>#</span>
              </div>
              <div class="trackname2-container">
                Song Name
              </div>
              <div class="trackartist1">
                Artist
              </div>
              <div class="trackartist1">
                Album
              </div>
              <div class="track2-duration">
              Duration
              </div>
            </div>
          </div>
        </div>
        <div class="inner-bottom">
          <div class="trackcard" v-for="(res,index) in resplaylistsdetails.tracks.items" :key="res.key">
            <div class="wrapper">
              <div class="indexno2">  
                {{ index+1 }}
              </div>
              <div class="trackname2-container" @click="playthissong(index)">
                {{ res.track.name }}
              </div>
              <div @click="displayartistPls(res.track.artists[0].id)" class="trackartist">
                {{ res.track.artists[0].name }}
              </div>
              <div @click="displaythisPls(res.track.album.id)" class="trackartist">
               <span class="ttof">{{ res.track.album.name }}</span> 
              </div>
              <div class="track2-duration" @click="playthissong(index)">
              {{getTime(res.track.duration_ms)}}
              </div>
              <div class="track2-options" @click="playthissong(index)">
                •••
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { vxm } from "@/store";


import { Component } from "vue-property-decorator";

@Component({
  layout: "contentarea"
})

export default class playlistdisplay extends Vue{
  private getTime(n: number) {
  const tmp = new Date(n).toISOString().substr(11, 8)

  if (tmp[0] == '0' && tmp[1] == '0') {
    return tmp.substr(3)
  }

  return tmp
}

  capitalizeFirstLetter(s:string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
  private resplaylistsdetails:any=[]
  private playlistid=""
  private song:any=[]
  private queuenextsongs:any=[]
  async mounted(){
    this.playlistid = this.$route.params.playlistdisplay
    console.log(this.$route.params)
    await fetch('http://localhost:3000/api/sendplaylistid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                playlistid: this.playlistid
            })
        })
        try {
            const tmp = await fetch('http://localhost:3000/api/getplaylistinfo', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resplaylistsdetails = await tmp.json()
            console.log(this.resplaylistsdetails)

        } catch (e) {
            console.log(e)
        }
        
  }
  private async displaythisPls(id:string){
        console.log(id)
        this.$router.push({ path: `/albumdisplay/${id}` })
    }
    private async displayartistPls(id3:string){
        console.log(id3)
        this.$router.push({ path: `/artistdisplay/${id3}` })
    }
  private async playthissong(index:number){
    this.queuenextsongs=[]
    for (let i = index; i < this.resplaylistsdetails.tracks.items.length; i++){
        this.song = this.resplaylistsdetails.tracks.items[i].track
        console.log(this.song)
        console.log(this.song.name)
        console.log(this.song.artists[0].name)
        console.log(this.song.album.images[0].url)
        if (i === index){
          const tmp = await fetch('http://localhost:3000/api/playalbumsong', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              songname: this.song.name,
              songartist: this.song.artists[0].name,
              songid: this.song.id
            })
        })
        const vid = await tmp.json()
        console.log(vid)
        vxm.playerStore.videoID = vid

          try {
            const tmp = await fetch('http://localhost:3000/api/getsongid', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            const ressonginfo = await tmp.json()
            console.log(ressonginfo)
            vxm.playerStore.songINFO=ressonginfo

        } catch (e) {
            console.log(e)
        }
        }
        else{
          this.queuenextsongs.push({'songname': this.song.name, 'songartist': this.song.artists[0].name, 'songimgurl': this.song.album.images[0].url, 'songid': this.song.id})         
        }
      }
      vxm.playerStore.queuenext=this.queuenextsongs
  }
}

</script>

<style>

@font-face {
  font-family: "spoof";
  src: url("../../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

.bg{
  font-family: "spoof";
  overflow: hidden; 
  position: relative; 
  left: 30px ;
  width: 1860px;
  height: 890px;
  background: #2e2a3a;
}

.bgblur{
  background-image: url(https://i.scdn.co/image/ab67616d00001e02415b79227c6cee25f42fbf41);
  background-size: 1860px 1860px;
  /* background-repeat: no-repeat;
  animation: marquee 30s infinite linear ; */
  filter: blur(10px);
  position: absolute;
  width: 1860px;
  height: 380px;
  z-index: 0;
}

@keyframes marquee {
  0% {
    background-position: 0;
  }
}

.upper-container{
  width: 1860px;
  height: 400px;
  padding-left: 45px;
  padding-top: 45px;
}

.outer-info-container{
  display: flex;
  padding-top: 30px;
  padding-left: 30px;
  backdrop-filter: drop-shadow(4px 4px 10px black );
  background: rgba(71, 71, 71, 0.596);
  border-radius: 8px;
  width: 900px;
  height: 300px;
}

.inner-img-container{
  overflow: hidden;
  border-radius: 8px;
  /* border: white solid; */
  width: 240px;
  height: 240px;
}

.inner-info-container{
  width: 596px;
  height: 240px;
  padding-left: 20px;
  padding-top: 30px;
}

.title-txt-inner{
  font-family: "spoof";
  color: rgb(192, 191, 191) !important;
  vertical-align: middle;
  text-align: left;
  font-size: 20px;
  height: 35px;
}

.title-txt-inner:hover{
  color: white !important;

}


.genre-releasedate{
  color: rgb(209, 209, 209);
  font-size: 18px;
  height: 30px;
}

.notracks-totaltime{
  color: rgb(189, 189, 189);
  font-size: 14px;
  padding-bottom: 10px;
}

.sub-txt-inner{
  font-family: "spoof";
  color: rgb(189, 189, 189);
  text-align: left;
  font-size: 14px;
  height: 120px;
}

.buttons-upper{
  padding-left: 40px;
  position: relative;
  top: -70px;
  left: 900px;
  display: flex;
  gap: 20px ;
  height: 70px;
  width: 900px;
}

.playbutton{
  border-radius: 50px;
  background-color: #ffeea9;
  color: black;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: none;
  width: 70px;
  height: 70px;
  transition: 0.2s linear;
}


.playbutton:hover{
  width: 150px;
}

.bottom-container{
  overflow-x: hidden !important;
  overflow: scroll;
  height: 490px;
  z-index: 2;
}

.albums-options{
  background: rgba(71, 71, 71, 0.596);
  border-radius: 8px;
  font-size: 25px;
  position: relative;
  left: 40px;
  top: 30px;
  color: #ffeea9;
  width: 50px;
  height: 35px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.inner-bottom{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  z-index: 2;
}

.trackcard{
  padding-bottom: 50px;
  background: #24212ea2;
  height: 46px;
  z-index: 2;
}

.trackcard:hover{
  color: #ffeea9;
  background: #2f2b3ba2;
}

.wrapper{
  width: 1784px;
  height: 56px;
}

.indexno2{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: white;
  font-size: 14px;
  width: 46px;
  height: 46px;
  transition: 0.1s linear;
}
.trackname2-container{
  color: white;
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 945px;
  height: 46px;
  transition: 0.1s linear;
}

.trackname2-container:hover{
  color: #ffeea9;
}

.trackname2-container:hover ~ .track2-duration{
  color: #ffeea9;
}

.trackname2-container:hover ~ .indexno2{
  color: #ffeea9;
}

.track2-duration{
  color: white;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 80px;
  height: 46px;
  transition: 0.1s linear;
}

.track2-options{
  color: #ffeea9;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 46px;
  height: 46px;
}

.trackartist1{
  text-align: left;
  vertical-align: middle;
  width: 334px;
  display: table-cell;
  color: rgb(255, 255, 255);
}

.trackartist{
  overflow: hidden;
  text-align: left;
  vertical-align: middle;
  width: 334px;
  display: table-cell;
  color: rgb(172, 172, 172);
  transition: 0.1s linear;
  user-select: none;
}

.trackartist:hover{
  color: #ffeea9;
}
</style>