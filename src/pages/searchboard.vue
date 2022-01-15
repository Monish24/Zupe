<template>
    <div>
        <div class="searchbar">
            <input v-model="searchQuery" v-on:keyup.enter="search" class="searchinput" placeholder="Search Songs, Artists, Albums ...">
            <button @click="search" class="searchbtn"><img class="inpboximg" src="@/assets/img/search.png" alt=""></button>
        </div>
        <div class="search-page-container"> 
            <div class="partiton-left"></div>
        <div class="partition-right"></div>
        <div class="searched-content-container">
            <div class="top-results-container">
                <div class="searched-c-title">
                    Top Results
                </div>

                
                <div class="tr-container">

                    <!-- Loop this -->
                    <div class="tr-card" v-for="(res, index) in results" :key="res.uri">
                        <div class="tr-inner-card" v-if="index < 3">
                           <img :src="res.album.images[1].url" height="138px" width="138px" alt="">
                        </div>
                        <div class="tr-card-info">
                            <div class="result-name">
                                {{ res.name }}
                                <div class="tr-artist-album">
                                    {{ res.artists[0].name }} • {{ res.album.name }}
                                </div>
                            </div> 
                        </div>
                        <div class="bottom-zupe">
                            Zupe
                        </div>
                    </div>
                </div>
            </div>
            <div class="searched-artists-container">
                <div class="searched-c-title">
                    Artists
                </div>
                <div class="art-container">
                    <div class="art-card">
                        <div class="art-image-container">
                            <img src="https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6" height="138px" width="138px" alt="">
                        </div>
                        <div class="name-artist">
                            Nirvana
                        </div>
                    </div>
                </div>
            </div>
            <div class="searched-songs-container">
                <div class="searched-c-title">
                    Songs
                </div>
                <div class="songs-grid">
                    <div class="searched-song-card" v-for="(res, index) in results" :key="res.uri" v-if="index >= 3">
                        <div class="sng-img-container">
                            <img :src="res.album.images[1].url" height="40px" width="40px" alt="">
                        </div>
                        <div class="songinf-sng">
                            <div class="name-sng">
                                {{ res.name }}
                                <div class="artist-sng">
                                    {{ res.artists[0].name }} • {{ res.album.name }}
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                </div>          
            <div class="searched-albums-container">
                <div class="searched-c-title">
                    Albums
                </div>
                <div class="albms-grid">
                    <div class="albms-card">
                        <div class="albm-img">
                            <img src="https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6" height="250px" width="250px" alt="">
                        </div>
                        <div class="albm-info">
                            Nevermind - EP  
                            <div class="albm-art-subtext">
                                Nirvana
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="searched-playlists-container">
                <div class="searched-c-title">
                    Playlists
                </div>
                <div class="albms-grid">
                    <div class="albms-card">
                        <div class="albm-img">
                            <img src="https://i.scdn.co/image/ab67616d00001e02fbc71c99f9c1296c56dd51b6" height="250px" width="250px" alt="">
                        </div>
                        <div class="albm-info">
                            Nevermind - EP  
                            <div class="albm-art-subtext">
                                Nirvana
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>     
        </div>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component({
  layout: "contentarea"
})

export default class searchboard extends Vue{
    private searchQuery=""
    private results=[]
    private postsearch=""

    private async search(){
        await fetch('http://localhost:3000/api/sendquery', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                searchQuery: this.searchQuery
            })
        })

        // try {
        // await fetch('http://localhost:3000/api/searchTrack', {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" },
        // }).then(response => response.json()).then((data) => {this.results = data; console.log(this.results)}).catch(err => console.error(err));
        // } catch (e) {
        // console.log(e)
        // }

        try {
            const tmp = await fetch('http://localhost:3000/api/searchTrack', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.results = await tmp.json()
            console.log(this.results)

        } catch (e) {
            console.log(e)
        }
        // this.postsearch=``
    } 
}
</script>

<style>

@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

body{
    font-family: "spoof";
    color: white;
    background: #2e2a3a;
}

.search-page-container{
    overflow-y: scroll;
    width: 1859px;
    height: 830px;
    position: relative;
    left: 22px;
    top: 40px;
}

/* .partition-left{

}

.partition-right{

} */

.searchbar{
    position: absolute;
    top: 10px;
    left: 764px;
}

.searchinput:focus{
    outline: none;
}

.searchinput{
    font-size: 16px;
    font-family: "spoof";
    color: white;
    background-color: #685f85;
    width: 364px;
    height: 40px;
    border-radius: 500px;
    border: none;
    padding-left: 10px;
    z-index: 1;
    caret-color: white;
}

.searchinput::placeholder{
    color: white;
    font-family: "spoof";
    font-size: 16px;
}

input:focus::placeholder {
  color: transparent;
}

.searchbtn{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 7px;
    left: 325px;
    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.searched-content-container{
    display: flex;
    flex-direction: column;
    gap: 34px;
    width: 1390px;
    height: 1500px;
    position: relative;
    left: 217px;
}

.top-results-container{
    border-bottom: solid #3f3a50 1px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 250px;

}

.searched-c-title{
    font-size: 17px;
    height: 22px;
}

.tr-container{
    overflow: hidden;
    grid-auto-flow: column;
    display: grid;
    grid-gap: 28px;
    width: 1378px;
    height: 200px;
}

.tr-card{
    background: #453f58;
    border-radius: 8px;
    width: 441px;
    height: 152px;
    padding-left: 20px;
    padding-top: 21px;

}

.tr-inner-card{
    overflow: hidden;
    border-radius: 8px;
    background: inherit;
    width: 112px;
    height: 112px;
}

.tr-card-info{
    padding-top: 30px;
    width: 275px;
    height: 100px;
    position: relative;
    top: -105px;
    left: 130px;
}

.tr-artist-album{
    color: #FFFFFFA3;
    font-size: 12px;
}

.bottom-zupe{
    color: #ffeea9;
    position: relative;
    top: -110px;
    left: 380px;
    font-size: 12px;
}

.searched-artists-container{
    border-bottom: solid #3f3a50 1px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 250px;
}

.art-container{
    position: relative;
    left: 20px;
    display: flex;
    flex-flow: row;
    gap: 30px;
    width: 1336px;
    height: 200px;
}

.art-card{
    width: 140px;
    height: 155px; 
}

.art-image-container{
    overflow: hidden;
    width: 138px;
    height: 138px;
    border-radius: 50%;
}
.name-artist{
    font-size: 13px;
    text-align: center;
}

.searched-songs-container{
    border-bottom: solid #3f3a50 1px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 270px;
}

.songs-grid{
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 20px;
    width: 1377px;
    height: 220px;
}

.searched-song-card{
    border-top: solid #3f3a50 1px;
    width: 330px;
    height: 60px;
    padding-top: 10px;
    padding-left: 10px;
}

.sng-img-container{
    overflow: hidden;
    border-radius: 4px;
    width: 40px;
    height: 40px;
}

.songinf-sng{
    position: relative;
    width: 290px;
    top: -37px;
    left: 50px;
}

.name-sng{
    font-size: 13px;
}

.artist-sng{
    opacity: 0.7;
    font-size: 12px;
}

.searched-albums-container{
    border-bottom: solid #3f3a50 1px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 390px;
}

.albms-grid{
    position: relative;
    left: 7px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 1370px;
    height: 280px;
}

.albms-card{
    width: 250px;
    height: 280px;
}

.albm-img{
    overflow: hidden;
    border-radius: 8px;
    width: 250px;
    height: 250px;
}

.albm-art-subtext{
    opacity: 0.7;
    font-size: 12px;
}

.searched-playlists-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 350px;
}
</style>