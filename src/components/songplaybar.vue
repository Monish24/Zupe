<template>
<div>
    <div class="playerBox">
      <div id="player"></div>
      <div class="current-song-img" @click="openthisalbum(ressonginfo.album.id)">
        <img v-if="ressonginfo" :src="ressonginfo.album.images[0].url" height="90px" width="90px" alt="">
      </div>
      <div class="csong-text-box">
        <div class="csong-text"> <span v-if="ressonginfo">{{ressonginfo.name}}</span><span v-if="!ressonginfo"></span> <br> <span class="csong-subtext"><span v-if="ressonginfo" @click="openthisart(ressonginfo.artists[0].id)">{{ressonginfo.artists[0].name}}</span></span></div>
      </div>
      <div class="cpt">
         <span v-if="currentpt != 0">{{ getTime(time) }}</span> 
        </div>
      <div class="prog-bar-box">
        
        <div id="progressbar">
          <div v-bind:style="{ width: currentpt + '%' }"></div> 
        </div>
        
        <div class="prevskip">
        <img class="prevskipimg" src="@/assets/img/prevskip.png" height="40px" width="40px" @click="openqueue" alt="">
        </div>
        <div class="playbuttonfilled">
          <img @click="playsong" v-if="!songplaying" src="@/assets/img/playbtnfilled.png" height="48px" width="48px" alt="">
          <img @click="pausesong" v-if="songplaying" src="@/assets/img/pausebtn.png" height="48px" width="48px" alt="">
        </div>
        <div class="nextskip">
        <img class="nextskipimg" src="@/assets/img/nextskip.png" height="40px" width="40px" alt="" @click="nextsongplay">
      </div>
      </div>
      <div class="dur">
          <span v-if="duration != 0">{{ getTime(duration) }}</span>
      </div>
      
      <div class="other-options-box">
        <div class="qiconimg">
        <img src="@/assets/img/queueicon.png" height="36px" width="36px" alt="" @click="openqueue">
        </div>
        <div class="lyrics-display-cont">

        </div>
        <div class="volumebtn">
          <img v-if="volumeinp == 0" class="volicon" src="@/assets/img/vol0.png" height="36px" width="36px" alt="">
          <img v-if="volumeinp <= 69 && volumeinp > 40" class="volicon" src="@/assets/img/vol2550.png" height="36px" width="36px" alt="">
          <img v-if="volumeinp <= 40 && volumeinp > 0" class="volicon" src="@/assets/img/volumeicon.png" height="36px" width="36px" alt="">
          <img v-if="volumeinp >= 70" class="volicon" src="@/assets/img/vol75100.png" height="36px" width="36px" alt="">
          <div class="slidecontainer">
            <input class="slideer" v-model="volumeinp" type="range" min="0" max="100" value="50">
          </div>
        </div>
      </div>
    </div>
    <transition
                name="custom-fade"
                enter-active-class="animate__animated animate__slideInUp"
                leave-active-class="animate__animated animate__slideOutDown"
              > 
        <div class="queuebox" v-if="open">
          <div class="queuecard-container">
            <draggable v-model="resqueuenext">
            <div class="queuecard" v-for="res in resqueuenext" :key="res.key">
              <img class="queueimg" :src="res.songimgurl" height="50px" width="50px" alt="">
              <div class="queuecard-text">
                {{res.songname}}<br>
                <span class="subt">{{res.songartist}}</span>
              </div>
            </div>
            </draggable>
          </div>
        </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { vxm } from "@/store";
import { Vue, Component, Watch } from "vue-property-decorator";
import YTPlayer  from 'yt-player'
import draggable from 'vuedraggable'


@Component({
  components: {draggable},
  name: "Navbar",
})
export default class songplaybar extends Vue {
  private player:YTPlayer | undefined
  private ressonginfo=''
  private time:number=0
  private duration:number= 0
  private ct:number=0
  private currentpt:number = 0
  private tdur:number=0
  private volumeinp:number=50
  private songplaying:boolean=false
  private resqueuenext:any=""
  private open=false
   mounted(){
    this.player = new YTPlayer('#player')
    this.player.on('playing',()=>{
      this.duration=this.player!.getDuration()
    })
    this.player.on('timeupdate', (seconds) => {
      this.time=seconds
      this.currentpt=((this.time ?? 1) / (this.duration ?? 1)) * 100 ; 
      console.log(this.currentpt)
    })
    this.player.on('ended', async () => {
      if (this.resqueuenext){
        const tmp = await fetch('http://localhost:3000/api/playalbumsong', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              songname: this.resqueuenext[0].songname,
              songartist: this.resqueuenext[0].songartist,
              songid: this.resqueuenext[0].songid
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
            this.ressonginfo=ressonginfo

        } catch (e) {
            console.log(e)
        }
        this.$delete(this.resqueuenext, 0)
      }
    })
    vxm.playerStore.$watch('videoID', value => {
      this.player?.load(value,true)
      this.songplaying=true
    })
    vxm.playerStore.$watch('songINFO',value => {
      this.ressonginfo = value
      console.log(this.ressonginfo)
    })
    vxm.playerStore.$watch('queuenext',value => {
      this.resqueuenext = value
      console.log(this.resqueuenext)
    })
    this.player.setVolume(this.volumeinp)
}

  private openthisalbum(id:string){
    this.$router.push({ path: `/albumdisplay/${id}` })
  }

  private openthisart(id:string){
    this.$router.push({ path: `/artistdisplay/${id}` })
  }

  private getTime(n: number) {
  const tmp = new Date(n * 1000).toISOString().substr(11, 8)

  if (tmp[0] == '0' && tmp[1] == '0') {
    return tmp.substr(3)
  }
  return tmp
}

private openqueue(){
  console.log(this.open)
  if(this.open===false){
  this.open=true
  }
  else{
    this.open=false
  }
}

private async nextsongplay(){
  if (this.resqueuenext){
        const tmp = await fetch('http://localhost:3000/api/playalbumsong', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              songname: this.resqueuenext[0].songname,
              songartist: this.resqueuenext[0].songartist,
              songid: this.resqueuenext[0].songid
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
            this.ressonginfo=ressonginfo

        } catch (e) {
            console.log(e)
        }
        console.log(this.resqueuenext)
        this.$delete(this.resqueuenext, 0)
      }
}

@Watch('volumeinp')
private volset(){
  this.player!.setVolume(this.volumeinp)
}

private playsong(){
  this.player!.play()
  this.songplaying = true
}

private pausesong(){
  this.player!.pause()
  this.songplaying = false
}

}
</script>
  
<style>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}
.playerBox{
  font-family: "spoof";
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 90px;
  background: #17151c;
  position: absolute;
  bottom: 0px;
  z-index: 30;
}

#player{
  width: 0px;
}

.current-song-img{
  width: 90px;
  height: 90px;
  transition: 00.1s linear;
}

.current-song-img:hover{
  filter: blur(5px);
}

.csong-text{
  position: relative;
  top: 25px;
  color: white;
  position: relative;
  left: 10px;
  width: 300px;
}

.csong-subtext{
  user-select: none;
  color: rgb(185, 185, 185);
  transition: 0.2s linear;
}

.csong-subtext:hover{
  color: #ffeea9;
}

.prog-bar-box{
  margin-left: 10px !important;
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

.other-options-box{
  display: flex;
  gap: 40px;
  position: absolute;
  right: 30px;
}

.qiconimg{
  position: relative;
  top: 15px;
  z-index: 10000;
}

.volicon{
  position: relative;
  left: 30px;
  top: 10px;
}

.volumebtn{
  position: relative;
  top: 5px;
}

#progressbar2 {
  background-color: rgb(116, 116, 116) ;
  border-radius: 13px;
  width: 102px;
  /* (height of inner div) / 2 + padding */
  transition: 0.1s linear;
}

#progressbar2>div {
  background-color: #ffeea9;
  width: 50%;
  /* Adjust with JavaScript */
  height: 3px;
  border-radius: 20px;
}

.cpt{
  color: white;
  position: relative;
  top: 58px;
  left: 54px;
}

.dur{
  color: white;
  position: relative;
  top: 58px;
  right: 54px;
}

.slideer{
  background: grey;
  width: 100px;
  height: 3px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.slideer::-webkit-slider-thumb{
  -webkit-appearance: none; 
  appearance: none;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background: #ffeea9;
  cursor: pointer;
}

.slideer::-webkit-slider-thumb:hover{
  width: 10px;
  height: 10px;
}

#progressbar {
  height: 2px;
  position: absolute;
  bottom: 20px;
  background-color: rgb(116, 116, 116) ;
  border-radius: 13px;
  width: 42%;
}

#progressbar>div {
  background-color: #ffeea9;
  height: 3px;
  border-radius: 20px;
}

.playbuttonfilled{
  position: absolute;
  bottom: 30px;
}

.nextskip{
  position: relative;
  left: 40px;
  bottom: 12px;
}

.nextskipimg{
  opacity: 0.7;
  transition: 0.1s linear;
}

.nextskipimg:hover{
  opacity: 1;
}

.prevskip{
  position: relative;
  right: 40px;
  bottom: 12px;
}

.prevskipimg{
  opacity: 0.7;
  transition: 0.1s linear;
}

.prevskipimg:hover{
  opacity: 1;
}

.queuebox{
  font-family: "spoof";
  border-radius: 4px;
  position: absolute;
  top: 490px;
  left: 1540px;
  width: 300px;
  height: 400px;
  background: #ffeea949;
  backdrop-filter: blur(5px);
  overflow-y:auto;
  z-index: 29;
}

.queuecard{
  padding-top: 10px;
  padding-left: 10px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  height: 69px;
  background-color: rgba(226, 226, 226, 0.253);  
  backdrop-filter: blur(5px);
}
.queuecard-text{
  user-select: none;
  text-overflow: ellipsis;
  font-size: 14px;
  padding-top: 4px;
  display: table-cell;
  vertical-align: middle;
  color: #17151c;
}

.subt{
  font-size: 12px;
}

.queueimg{
  border-radius: 2px;
}
</style>
