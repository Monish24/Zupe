<template>
    <div class="bg">
      <div class="bgblur" v-bind:style="{ backgroundImage: 'url(' + resAlbumsdetails.images[0].url + ')' }">
      </div>
      <div class="upper-container">
        <div class="outer-info-container"> 
          <div class="inner-img-container">
            <img :src="resAlbumsdetails.images[0].url" height="240px" width="240px" alt="">
          </div>
          <div class="inner-info-container">
            <div @click="displayartistPls(resAlbumsdetails.artists[0].id)" class="title-txt-inner">
              {{ resAlbumsdetails.name }} -  <div>{{ resAlbumsdetails.artists[0].name }}</div>
            </div>
            <div class="genre-releasedate"> 
             {{capitalizeFirstLetter(resAlbumsdetails.album_type)}} · {{ format(resAlbumsdetails.release_date) }}
            </div>
            <div class="notracks-totaltime">
               {{ resAlbumsdetails.total_tracks }} songs
            </div>
            <div class="sub-txt-inner">
              <span>We dont know much about this album, but we're sure it's great :)</span>
 
              <player username='matt' />  
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
        <div class="inner-bottom">
          <div class="trackcard" v-for="(res,index) in resAlbumsdetails.tracks.items" :key="res.key">
            <!-- <div class="wrapper"> -->
              <div class="indexno">  
                <span>{{index+1}}</span>
              </div>
              <div class="trackname-container" @click="sendsonginfo(index,res.id)">
                {{ res.name }}
              </div>
              <div class="track-duration">
              {{ getTime(res.duration_ms) }}
              </div>
              <div class="track-options" @click="addToLibrary(res.id,res.artists[0].id,resAlbumsdetails.id)">
                •••
              </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { vxm } from "@/store";
import Vue from "vue"


import { Component } from "vue-property-decorator";

@Component({
  layout: "contentarea"
})

export default class albumdisplay extends Vue{
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
  private resAlbumsdetails:any=[]
  private albumid=""
  private song:any=[]
  private queuenextsongs:any=[]
  async mounted(){
    this.albumid = this.$route.params.albumid
    await fetch('http://localhost:3000/api/sendalbumid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                albumid: this.albumid
            })
        })
        try {
            const tmp = await fetch('http://localhost:3000/api/getalbuminfo', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resAlbumsdetails = await tmp.json()
            console.log(this.resAlbumsdetails)

        } catch (e) {
            console.log(e)
        }
  }
  private async displayartistPls(id3:string){
        console.log(id3)
        this.$router.push({ path: `/artistdisplay/${id3}` })
    }
    private async sendsonginfo(index:number,songid:string){
      this.queuenextsongs=[]
      for (let i = index; i < this.resAlbumsdetails.tracks.items.length; i++){
        this.song = this.resAlbumsdetails.tracks.items[i]
        console.log(this.song)
        console.log(this.song.name)
        console.log(this.song.artists[0].name)
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
          this.queuenextsongs.push({'songname': this.song.name, 'songartist': this.song.artists[0].name, 'songimgurl': this.resAlbumsdetails.images[0].url, 'songid': this.song.id})         
        }
      }
      vxm.playerStore.queuenext=this.queuenextsongs
      console.log(this.queuenextsongs)
      // const tmp = await fetch('http://localhost:3000/api/playalbumsong', {
      //       method: 'POST',
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({
      //           songnameart: songnameart,
      //           songid: songid,
      //           albumID: albumID,
      //           tracknum: tracknum
      //       })
      //   })
      //   const vid = await tmp.json()
      //   console.log(vid)
      //   vxm.playerStore.videoID = vid
        
        // try {
        //     const tmp = await fetch('http://localhost:3000/api/getsongid', {
        //         method: 'GET',
        //         headers: { "Content-Type": "application/json" },
        //     })

        //     const ressonginfo = await tmp.json()
        //     console.log(ressonginfo)
        //     vxm.playerStore.songINFO=ressonginfo

        // } catch (e) {
        //     console.log(e)
        // }
  }
  private async addToLibrary(songid:string,artistid:string,albumid:string){
    console.log(songid,artistid,albumid)
    const tmp = await fetch('http://localhost:3000/lib/getSong', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              song_id: songid,
              artist_id: artistid,
              album_id: albumid,
          })
      })
  }
  private format(inputDate:string) {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getDate() + 1 + '/' + date.getMonth() + '/' + date.getFullYear();
    }
}
}

</script>

<style>
@font-face {
  font-family: "spoof";
  src: url("../../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

body{
  font-family: "spoof";
}

.bg{ 
  overflow: hidden;
  position: relative; 
  left: 30px ;
  width: 1860px;
  height: 890px;
  background: #2e2a3a;
}

.bgblur{
  background-image: url(https://i.scdn.co/image/ab67616d00001e02415b79227c6cee25f42fbf41);
  background-size: 100vw 100vw;
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
  background: #24212ea2;
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
  user-select: none;
  display: flex;
  flex-direction: row;
  gap: 7px ;
  color: rgb(192, 191, 191) !important;
  vertical-align: middle;
  text-align: left;
  font-size: 20px;
  height: 35px;
  transition: 0.1s linear ;
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
  border: rgba(129, 129, 129, 0) 1px solid;
  border-radius: 50px;
  background-color: rgba(71, 71, 71, 0.596);
  color: black;
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
  overflow: scroll;
  overflow-x: hidden;
  height: 25.789vw;
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
  user-select: none;
  color: white;
  background: #24212ea2;
  height: 46px;
  z-index: 2;
}

.trackcard:hover{
  background: #2f2b3ba2;
  color: #ffeea9;
}

.wrapper{
  height: 2.947vw;
}

.indexno{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  width: 2.421vw;
  height: 46px;
}
.trackname-container{
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 84.5vw;
  height: 46px;
}

.track-duration{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 4.2vw;
  height: 46px;
}

.track-options{
  color: #ffeea9;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 2.421vw;
  height: 46px;
}
</style>