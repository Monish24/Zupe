<template>
    <div class="background-container">
        <div class="art-img-albums" v-bind:style="{ backgroundImage: 'url(' + resartistsdetails.images[0].url + ')' }">
            <div class="artist-name-shadow">
                {{resartistsdetails.name}}
            </div>
            <div class="artistsalbums-ad">
                <div class="singles-eps">
                    <div class="singles-eps-txt">
                        Albums & Singles
                    </div>
                    <div class="cards-container">
                    <div class="outer-cont" v-for="res in resartistalbums" :key="res.key" @click="displaythisPls(res.id)">
                    <div class="artistalbum-card" >
                        <div class="artistalbumimg">
                            <img :src="res.images[0].url" height="178px" width="178px" alt="">
                        </div>
                        <div class="artistalbumname">
                            {{ res.name }}
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="top-results-artist-container">
            <div class="tra-title">
                Top Songs
            </div>
            <div class="art-tracks-card-cont">
                <div class="tracks-artist-card" v-for="(res,index) in resartisttoptracks.tracks" :key="res.key" @click="playthissong(res.name,res.artists[0].name,res.id)">
                    <div class="indexno0">  
                <span>{{ index+1 }}</span>
              </div>
              <div class="trackname-container0">
                {{ res.name }}
              </div>
              <div class="track-duration0">
              {{ getTime(res.duration_ms) }}
              </div>
              <div class="track-options0">
                •••
              </div>
                </div>
            </div>
        </div>
        <div class="sim-art-cont">
            <div class="tra-title2">
                Similar Artists
            </div>
            <div class="sim-art-card-cont">
                <div class="sim-art-card" v-for="res in resartistrelatedart.artists" :key="res.key" @click="displayartistPls(res.id)">
                    <div class="sim-art-img-cont">
                        <img class="img" :src="res.images[0].url" height="360px" width="360px" alt="">
                    </div>
                    <div class="sim-art-name">
                        {{ res.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { vxm } from "@/store";
import { Component, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  layout: 'contentarea'
})

export default class artistdisplay extends Vue{
    beforeRouteUpdate(to: Route, from: Route, next: Next<artistdisplay>){
        const id = to.params.artistdisplay
        this.hello(id)
        next()
    }
    private artistid=""
    private resartistsdetails=[]
    private resartistalbums=[]
    private resartisttoptracks=[]
    private resartistrelatedart=[]
    private getTime(n: number) {
  const tmp = new Date(n).toISOString().substr(11, 8)

  if (tmp[0] == '0' && tmp[1] == '0') {
    return tmp.substr(3)
  }

  return tmp
}
async mounted(){
    this.hello()
  }
  private async hello(artistid?:string){
      this.artistid = artistid?? this.$route.params.artistdisplay
    console.log(this.$route.params)
    await fetch('http://localhost:3000/api/sendartistid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                artistid: this.artistid
            })
        })
        try {
            const tmp = await fetch('http://localhost:3000/api/getartistinfo', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resartistsdetails = await tmp.json()
            console.log(this.resartistsdetails)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getartistalbums', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resartistalbums = await tmp.json()
            console.log(this.resartistalbums)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getartisttoptracks', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resartisttoptracks = await tmp.json()
            console.log(this.resartisttoptracks)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getartistrelatedart', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resartistrelatedart = await tmp.json()
            console.log(this.resartistrelatedart)

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
        // location.assign(`/artistdisplay/${id3}`);
    }
    private async playthissong(songname:string,songartist:string,songid:string){
        const tmp = await fetch('http://localhost:3000/api/playalbumsong', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              songname: songname,
              songartist: songartist,
              songid: songid
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
}



</script>

<style>
@font-face {
  font-family: "spoof";
  src: url("../../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

.background-container{
    overflow-x:hidden !important;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    font-family: "spoof";
    position: relative;
    left: 30px;
    width: 1860px;
    height: 890px;
    background-color: #292534   ;
}

.art-img-albums{
    overflow-y: scroll;
    overflow-x:hidden !important;
    width: 879px;
    height: 879px;
    background-image: url("https://i.scdn.co/image/ab6761610000e5ebd693efe23dcda7b9595e77ec");
    background-size: 879px 879px;
    background-repeat: no-repeat;
    padding-top: 464px;
}

.artist-name-shadow{
    padding-top: 24px;
    padding-left: 24px;
    font-size: 60px;
    color: white;
    width: 870px;
    height: 100px;
}

.singles-eps{
    padding-left: 40px;
    padding-right: 20px;
    width: 879px;
    margin-bottom:10px !important;
}

.singles-eps-txt{
    border-radius: 50px;
    margin-top: 20px !important;
    /* background: #292534; */
    padding-top: 4px;
    flex-direction: row;
    padding-left: 10px;
    font-size: 20px;
    color: white;
    height: 35px;
    margin-bottom:20px !important;
}

.cards-container{
    overflow: hidden;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: auto auto auto;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
}

.outer-cont{
    border-radius: 4px;
    background: #575461;
    padding-top: 10px;
    padding-left: 10px;
    width: 200px;
    height: 220px;
}

.artistalbum-card{
    width: 178px;
    height: 204px;
}

.artistalbumname{
    font-size: 13px;
    margin-top: 3px !important;
    font-family: "spoof";
    color: white;
}

.artistsalbums-ad{
    padding-bottom: 10px;
    background: #292534;
    display: flex;
    flex-direction: column;
}

.artistalbumimg{
    overflow: hidden;
    border-radius: 4px;
    width: 178px;
    height: 178px;
}

.artistalbumimg:hover{
    filter: blur(2px);
}

.top-results-artist-container{
    border-right: 1px solid rgba(128, 128, 128, 0.164);
    width: 530px;
    height: 890px;
    background: #292534;
}

.tra-title{
    border-bottom: 1px solid rgba(204, 204, 204, 0.226);
    font-size: 25px;
    color: white;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    position: relative;
    left: 45px;
    width: 400px;
    height: 60px;
}

.art-tracks-card-cont{
    display: flex;
    flex-direction: column;
    width: 500px;
}

.tracks-artist-card{
    color: white;
    width: 600px;
    height: 46px;;
}

.tracks-artist-card:hover{
    color: #ffeea9 !important;
    background: rgba(255, 255, 255, 0.205);
}

.indexno0{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  width: 46px;
  height: 46px;
}
.trackname-container0{
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  width: 375px;
  height: 46px;
}

.track-duration0{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 60px;
  height: 46px;
}

.track-options0{
  color: #ffeea9;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 46px;
  height: 46px;
}

.sim-art-cont{
    overflow-y: scroll;
    overflow-x: hidden !important;
    background: #292534;
    height: 890px;
    width: 450px;
}

.tra-title2{
    border-bottom: 1px solid rgba(204, 204, 204, 0.226);
    font-size: 25px;
    color: white;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    position: relative;
    left: 45px;
    width: 360px;
    height: 60px;
}

.sim-art-card-cont{
    margin-top: 20px !important;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 360px;
    position: relative;
    left: 45px;
}

.sim-art-card{
    width: 360px;
    height: 400px;
}

.sim-art-img-cont{
    border-radius: 50%;
    overflow: hidden;
}

.sim-art-name{
    color: white;
    font-size: 18px;
    text-align: center;
}

.img:hover{
    filter: blur(7px);
}

.img{
    transition: 0.1s linear;
}
</style>