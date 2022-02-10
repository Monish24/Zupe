<template>
    <div class="dashboard">
        <div class="content-container">
            <div class="partitions">
                <div class="partition-mp-profile"></div>
                <div class="partition-top"></div>
                <div class="partition-1-2"></div>
                <div class="partition-2-3"></div>
                <div class="partition-3-4"></div>
                <div class="partition-4-5"></div>
                <div class="partition-5-6"></div>
                <div class="partition-6-7"></div>
                <div class="partition-7-8"></div>
                <div class="partition-8-9"></div>
                <div class="partition-9-10"></div>
                <div class="partition-10-11"></div>
            </div>
            <div class="mp-profile-container">
                <div class="monthly-playlist-container">
                    <div class="mp-label">
                        <div class="mpl-main-text">
                            YOUR MONTHLY PLAYLIST
                        </div>
                        <div class="mpl-sub-text">
                            This is your monthly playlist that is made <br>
                            especially for you by <span class="Zupe-word">Zupe</span>, made of songs that <br>
                            We think you might love to listen! 
                        </div>
                    </div>
                    <div class="mp-card">
                        <span class="mp-img">
                            <img src="@/assets/img/placeholder.png" height="187px" width="187px">
                        </span>
                        <div class="mp-text-container">    
                            <span class="mp-main-text">
                                Playlist name<br>
                            </span>
                            <span class="mp-sub-text">
                                Artist name
                            </span> 
                        </div>
                    </div>
                </div>
                <div class="profile-container">
                    <div class="user-info-container">
                        <div class="usnc">
                            <fitty :options="options">
                               <template v-slot:content>       
                                Monish Shah
                                </template>
                            </fitty>
                        </div>
                        <div class="secondary-info">
                          11 Playlists 
                        </div>
                    </div>
                    <div class="open-profile">
                      <button class="opBtn" @click="profileopn">Open Profile</button>
                    </div>
                    <div class="profile-picture">
                      <img src="@/assets/img/placeholder.png" height="200px" width="200px" alt="PP">
                    </div>
                </div>
            </div>
            <div class="cardsgrid-container">
                <div class="cardsgrid-labels">
                    <div class="cgt1">
                        <span class="title-txt">
                            New <br>
                            Releases
                        </span>
                    </div>
                    <div class="cgt2">
                        <span class="title-txt">
                            Best Of <br>
                            {{fart1}}
                        </span>
                    </div>
                    <div class="cgt3">
                        <span class="title-txt">
                            Featured <br>
                            Playlists                            
                        </span>
                    </div>
                    <div class="cgt4">
                        <span class="title-txt">
                            More Like <br>
                            {{fart2}}
                        </span>
                    </div>
                    <div class="cgt5">
                        <span class="title-txt">
                            Playlists <br>
                            For You
                        </span>
                    </div>
                    <div class="cgt6">
                        <span class="title-txt">
                            Genre <br>
                            Mix
                        </span>
                    </div>
                    <div class="cgt7">
                        <span class="title-txt">
                            Discover <br>
                            Albums
                        </span>
                    </div>
                    <div class="cgt8">
                        <span class="title-txt">
                            More of what <br>
                            You Like
                        </span>
                    </div>
                    <div class="cgt9">
                        <span class="title-txt">
                            Artists <br>
                            For You
                        </span>
                    </div>
                    <div class="cgt10">
                        <span class="title-txt">
                            Mood
                        </span>
                    </div>
                    <div class="cgt11">
                        <span class="title-txt">
                            Charts
                        </span>
                    </div>
                </div>
                <div class="cardsgrid">
                    <carousel>
                    <div class="cardsgrid-g1">
                         <div class="cg-container" v-for="res in resnewReleases" :key="res.key" @click="displaythisPls(res.id)">
                             <slide>
                             <span class="icg1">
                                 <img :src="res.images[0].url" height="270px" width="270px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{ res.artists[0].name }}
                                </span>
                             </div>
                             </slide>
                         </div>
                    </div>
                    </carousel>
                    <div class="cardsgrid-g2">
                        <div class="cg-container" v-for="res in resartistalbums" :key="res.key" @click="displaythisPls(res.id)">
                             <span class="icg1">
                                 <img :src="res.images[0].url" height="270px" width="270px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{ res.artists[0].name }}
                                </span>
                            </div>                           
                        </div>
                    </div>
                    <div class="cardsgrid-g3">
                        <div class="cg-container" v-for="res in resfeaturedplaylists" :key="res.key" @click="displaylistPls(res.id)">
                             <span class="icg">
                                 <img class="imgg" :src="res.images[0].url" height="350px" width="350px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  By Zupe
                                </span>
                            </div>
                         </div>
                    </div>
                    <div class="cardsgrid-g4">
                        <div class="cg-container" v-for="res in resrelatedartistsalbums1" :key="res.key" @click="displaythisPls(res.id)">
                             <span class="icg1">
                                 <img :src="res.images[0].url" height="270px" width="270px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{ res.artists[0].name }}
                                </span>
                            </div>
                         </div>
                    </div>
                    <div class="cardsgrid-g5">
                        <div class="cg-container" v-for="res in getgenre1playlists" :key="res.key" @click="displaylistPls(res.id)">
                             <span class="icg">
                                 <img :src="res.images[0].url" height="350px" width="350px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{ res.owner.display_name }}
                                </span>
                            </div>
                         </div>
                    </div>
                    <div class="cardsgrid-g6">
                        <div class="cg-container" v-for="res in getgenre2playlists" :key="res.key" @click="displaylistPls(res.id)">
                             <span class="icg">
                                 <img :src="res.images[0].url" height="350px" width="350px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{ res.owner.display_name }}
                                </span>
                            </div>
                         </div>
                         
                    </div>
                    <div class="cardsgrid-g7">
                        <div class="cg-container" v-for="res in resrelatedartistsalbums2" :key="res.key" @click="displaythisPls(res.id)">
                             <span class="icg1">
                                 <img :src="res.images[0].url" height="270px" width="270px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{res.name}}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{res.artists[0].name}}
                                </span>
                            </div>
                         </div>
                    </div>
                    <div class="cardsgrid-g8">
                        <div class="cg-container" v-for="res in getgenre3playlists" :key="res.key" @click="displaylistPls(res.id)">
                             <span class="icg">
                                 <img :src="res.images[0].url" height="350px" width="350px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  {{ res.owner.display_name }}
                                </span>
                            </div>
                         </div>
                         
                    </div>
                    <div class="cardsgrid-g9">
                        <div class="cg-container" v-for="res in resrelatedartists" :key="res.key" @click="displayartistPls(res.id)">
                             <span class="icg1">
                                 <img :src="res.images[0].url" height="270px" width="270px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  Artist
                                </span>
                            </div>
                         </div>
                      
                    </div>
                    <div class="cardsgrid-g10">
                        <div class="cg-container" v-for="res in resmoodplaylists" :key="res.key" @click="displaylistPls(res.id)">
                             <span class="icg1">
                                 <img :src="res.images[0].url" height="270px" width="270px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  Zupe
                                </span>
                            </div>
                         </div>
                         
                    </div>
                    <div class="cardsgrid-g11">
                        <div class="cg-container" v-for="res in rescharts" :key="res.key" @click="displaylistPls(res.id)">
                             <span class="icg">
                                 <img :src="res.images[0].url" height="350px" width="350px">
                             </span>
                             <div class="songinfo-cg">
                                <span class="mp-main-text">
                                  {{ res.name }}<br>
                                </span>
                                <span class="mp-sub-text">
                                  Zupe
                                </span>
                            </div>
                         </div>
                         
                    </div>
                </div>
            </div>
        </div>       
        <div>

        </div>
    </div>
</template>

<script lang="ts">
import { vxm } from '@/store';
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
@Component({
  layout: "contentarea"
})

export default class Dashboard extends Vue{
    private uid = ''
    private resnewReleases=[]
    private resartistalbums:any=[]
    private resfeaturedplaylists=[]
    private resrelatedartistsalbums1:any=[]
    private resrelatedartistsalbums2=[]
    private getgenre1playlists=[]
    private getgenre2playlists=[]
    private getgenre3playlists=[]
    private resrelatedartists=[]
    private resmoodplaylists=[]
    private rescharts=[]
    private fart1=''
    private fart2=''
    private fart3=''
    private guu1=''
    private guu2=''
    private guu3=''
    private pref:any=[]
    async created(){
    
    this.uid = vxm.playerStore.uid
    console.log(this.uid)
    // try {
    //         const tmp = await fetch('http://localhost:3000/api/getpreff', {
    //             method: 'GET',
    //             headers: { "Content-Type": "application/json" },
    //         })

    //         this.pref = await tmp.json()
    //         console.log(this.pref)
    //         this.fart1=this.pref[0]
    //         this.fart2=this.pref[1]
    //         this.fart3=this.pref[2]
    //         this.guu1=this.pref[3]
    //         this.guu2=this.pref[4]
    //         this.guu2=this.pref[5]
    //         console.log(this.fart1,this.fart2,this.fart3,this.guu1,this.guu2,this.guu3)
    //     } catch (e) {
    //         console.log(e)
    //     }
    try {
        const tmp = await fetch('http://localhost:3000/api/uidinit', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uid: this.uid
            })
        })
        } catch (e) {
        console.log(e)
        }
      try {
            const tmp = await fetch('http://localhost:3000/api/newReleases', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resnewReleases = await tmp.json()
            console.log(this.resnewReleases)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getfavartistalbum', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resartistalbums = await tmp.json()
            console.log(this.resartistalbums)
            this.fart1=this.resartistalbums[0].artists[0].name
        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getfeaturedplaylists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resfeaturedplaylists = await tmp.json()
            console.log(this.resfeaturedplaylists)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getrelatedartistsalbum1', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resrelatedartistsalbums1 = await tmp.json()
            console.log(this.resrelatedartistsalbums1)
            this.fart2=this.resrelatedartistsalbums1[0].artists[0].name
        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getgenre1playlists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.getgenre1playlists = await tmp.json()
            console.log(this.getgenre1playlists)
            
        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getgenre2playlists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.getgenre2playlists = await tmp.json()
            console.log(this.getgenre2playlists)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getgenre3playlists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.getgenre3playlists = await tmp.json()
            console.log(this.getgenre3playlists)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getrelatedartistsalbum2', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resrelatedartistsalbums2 = await tmp.json()
            console.log(this.resrelatedartistsalbums2)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getrelatedartists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resrelatedartists = await tmp.json()
            console.log(this.resrelatedartists)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/Moodplaylists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resmoodplaylists = await tmp.json()
            console.log(this.resmoodplaylists)

        } catch (e) {
            console.log(e)
        }
        try {
            const tmp = await fetch('http://localhost:3000/api/getcharts', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.rescharts = await tmp.json()
            console.log(this.rescharts)

        } catch (e) {
            console.log(e)
        }
    }
    private testurl1="https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6"
    private options={
        minSize: 1,
        maxSize: 60,
      }
    private async displaythisPls(id:string){
        console.log(id)
        this.$router.push({ path: `/albumdisplay/${id}` })
    }
    private async displaylistPls(id2:string){
        console.log(id2)
        this.$router.push({ path: `/playlistdisplay/${id2}` })
    }
    private async displayartistPls(id3:string){
        console.log(id3)
        this.$router.push({ path: `/artistdisplay/${id3}` })
    }
    private async profileopn(){
        this.$router.push('/userprofile')
    }
}



</script>

<style>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

@media screen and (max-width: 1000px) {
    body{
    overflow: scroll;
}

}

body{
    overflow: hidden;
}

img{
    user-select: none;
}

.dashboard{
    overflow-x: hidden;
    width: 1900px;
    height: 896px;
    background: #2e2a3a !important;
}

.content-container{
    background-color: #2e2a3a !important;
    overflow-x: hidden;
    overflow-y: scroll;
    display: block;
    width: 1859px;
    height: 896px;
    position: fixed;
    top: 0px;
    left: 30px;
}

.Zupe-word{
    color: #ffeea9;
}

.partition-mp-profile{
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 275px;
    height: 0px;
    position: relative;
    top: 156px;
    left: 900px;
    z-index: 0;
}

.partition-top{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 310px;
    left: 25px;
    z-index: 0;
}

.partition-1-2{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 682px;
    left: 25px;
    z-index: 0;
}

.partition-2-3{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 1073px;
    left: 25px;
    z-index: 0;
}

.partition-3-4{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 1460px;
    left: 25px;
    z-index: 0;
}

.partition-4-5{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 1849px;
    left: 25px;
    z-index: 0;
}

.partition-5-6{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 2243px;
    left: 25px;
    z-index: 0;
}

.partition-6-7{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 2629px;
    left: 25px;
    z-index: 0;
}

.partition-7-8{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 3027px;
    left: 25px;
    z-index: 0;
}

.partition-8-9{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 3413px;
    left: 25px;
    z-index: 0;
}

.partition-9-10{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 3809px;
    left: 25px;
    z-index: 0;
}

.partition-10-11{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 1808px;
    height: 0px;
    position: relative;
    top: 4199px;
    left: 25px;
    z-index: 0;
}

.mp-profile-container{
    display: flex;
    position: relative;
    top: 0px;
    left: 0px;
    width: 1859px;
    height: 320px;
}

.cardsgrid-container{
    display: flex;
    position: relative;
    top: 0px;
    left: 0px;
    width: 1859px;
    height: 3000px;
}

.cardsgrid-labels{
    align-items: center;
    position: relative;
    top: 0px;
    left: -20px;
    width: 300px;
    height: 3000px;
}

.title-txt{
    font-family: "spoof";
    color: white;
    font-size: 50px;
    text-align: center;
    align-self: center;
    position: relative;
    top: 30px;
    left: 0px;
}

.cgt1{
    text-align: center;
    position: relative;
    top: 70px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt2{
    text-align: center;
    position: relative;
    top: 190px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt3{
    text-align: center;
    position: relative;
    top: 336px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt4{
    text-align: center;
    position: relative;
    top: 473px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt5{
    text-align: center;
    position: relative;
    top: 618px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt6{
    text-align: center;
    position: relative;
    top: 770px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt7{
    text-align: center;
    position: relative;
    top: 907px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt8{
    text-align: center;
    position: relative;
    top: 1013px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt9{
    text-align: center;
    position: relative;
    top: 1200px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt10{
    text-align: center;
    position: relative;
    top: 1360px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cgt11{
    text-align: center;
    position: relative;
    top: 1500px;
    left: 30px;
    width: 297px;
    height: 250px;
}

.cardsgrid{
    position: relative;
    margin-top: 24px;
    margin-left: 60px;
    top: 0px;
    left: 0px;
    width: 1605px;
}

.mp-label{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 727px;
    height: 240px;
    position: absolute;
    top: 14px;
    left: 280px;
}

.mpl-main-text{
    font-family: "spoof";
    font-size: 60px;
    color: white;
}

.mpl-sub-text{
    padding-left: 10px;
    font-family: "spoof";
    font-size: 16px;
    color: white
}

.mp-card{
    overflow: hidden;
    background: #423F4D;
    border-radius: 5px;
    margin-top: 12.5px;
    margin-left: 60px;
    display: flex;
    width: 187px;
    height: 263px;
    position: relative;
    top: 10px;
    left: 50px;
}

.mp-text-container{
    padding-top: 9px;
    text-align: center;
    color: white;
    font-family: "spoof";
    align-items: center;
    width: 187px;
    height: 80px;
    position: absolute;
    top: 187px;
    background: #817F88;
}

.mp-main-text{
    vertical-align: middle;
    position: relative;
    font-size: 16px;
    color: white;
}

.mp-sub-text{
    vertical-align: middle;
    position: relative;
    font-size: 12px;
    color: lightgray;
}

.user-info-container{
    width: 377px;
    height: 260px;
    position: absolute;
    top: 14px;
    left: 1080px;
}

.usnc{
    color: white;
    display: flex;
    font-size: 60px;
    font-family: "spoof";
}

.secondary-info{
  width: 360px;
  height: 24px;
  font-family: "spoof";
  font-size: 14px;
  color: white;
  position: relative;
  top: 10px;
  left: 5px;
}

.opBtn{
  position: relative;
  top: 220px;
  left: 893px;
  background-color: grey;
  border: none;
  color: #2e2a3a;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "spoof";
  border-radius: 3px;
  width: 150px;
  height: 30px;
  transition: 0.1s linear;
}

.opBtn:hover{
    background-color: #ffeea9;
}

.profile-picture{
  width: 200px;
  height: 200px;
  position: absolute;
  left: 1550px;
  top: 44px;
  border-radius: 50%;
  overflow: hidden;
}

.cg-container{
    overflow: hidden;
    background: #423F4D;
    border-radius: 5px;   
    display: flex;
    position: relative;
    width: 260px;
    height: 266px;
}

.openthisbtn{
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    position: absolute;
    width: 260px;
    height: 266px;
    z-index: 2;
}

.songinfo-cg{
    opacity: 0.8;
    padding-top: 9px;
    text-align: center;
    color: white;
    font-family: "spoof";
    width: 260px;
    height: 270px;
    position: absolute;
    top: 187px;
    background: #00000057;
    z-index: 2;
    transition: 0.1s linear;
}


.cardsgrid-g1{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 24px;
    left: 35px;
}

.cardsgrid-g2{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 144px;
    left: 35px;
}

.cardsgrid-g3{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 264px;
    left: 35px;
}

.cardsgrid-g4{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 384px;
    left: 35px;
}

.cardsgrid-g5{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 504px;
    left: 35px;
}

.cardsgrid-g6{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 624px;
    left: 35px;
}

.cardsgrid-g7{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 744px;
    left: 35px;
}

.cardsgrid-g8{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 864px;
    left: 35px;
}

.cardsgrid-g9{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 984px;
    left: 35px;
}

.cardsgrid-g10{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 1104px;
    left: 35px;
}

.cardsgrid-g11{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 69px;
    width: 1253px;
    height: 272px;
    position: relative;
    top: 1224px;
    left: 35px;
}

.icg{
  position: relative;
  left: -47px;
  transition: 0.1s linear;
  z-index: 1;
}

.icg:hover{
  filter: blur(10px);
  z-index: 1;
}

.icg:hover + .songinfo-cg{
  color: black;
}

.icg1{
  transition: 0.1s linear;
  z-index: 1;
}

.icg1:hover{
  filter: blur(10px);
  z-index: 1;
}

.icg1:hover + .songinfo-cg{
  color: black;
}

.mp-main-text{
  color: white;
  opacity: 1 !important;
}
</style>