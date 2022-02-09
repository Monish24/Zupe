<template>
    <div class="content-container">
            <div class="search-box-art">
                <input class="searchinput" v-model="searchQuery" v-on:keyup.enter="searchart" type="text" placeholder="Search for genres...">
                <button @click="searchart" class="searchbtn"></button>
                <img class="sboximg" src="@/assets/img/search.png" alt="">
            </div>
            <div class="slct-art-container">
                <div class="slct-3-art-text">
                    Select 3 of your favorite genres
                </div>
                <div class="slct-art-card-container">
                    <div class="sart-card" v-for="(res) in resultsArtists" :key="res">
                        <div class="sart-img">
                            <img v-if="res.images[0] && res.images[0].url" :src="res.images[0].url" width="150px" height="150px" alt="">
                            <img v-else src="@/assets/img/placeholder.png" width="150px" height="150px" alt="">
                        </div>   
                       <div class="sart-text">
                           {{ res.name }}
                        </div>                
                    </div>
                </div>
            </div>
            <router-link style="text-decoration: none; color: inherit;" to='/albumsselect'>
            <button class="next-btn">Next</button>
            </router-link>
            <div class="nbtn-shadow"></div>
        </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  
})

export default class genreselect extends Vue{
    private results ={
    "genres": [
        "acoustic",
        "afrobeat",
        "alt-rock",
        "alternative",
        "ambient",
        "anime",
        "black-metal",
        "bluegrass",
        "blues",
        "bossanova",
        "brazil",
        "breakbeat",
        "british",
        "cantopop",
        "chicago-house",
        "children",
        "chill",
        "classical",
        "club",
        "comedy",
        "country",
        "dance",
        "dancehall",
        "death-metal",
        "deep-house",
        "detroit-techno",
        "disco",
        "disney",
        "drum-and-bass",
        "dub",
        "dubstep",
        "edm",
        "electro",
        "electronic",
        "emo",
        "folk",
        "forro",
        "french",
        "funk",
        "garage",
        "german",
        "gospel",
        "goth",
        "grindcore",
        "groove",
        "grunge",
        "guitar",
        "happy",
        "hard-rock",
        "hardcore",
        "hardstyle",
        "heavy-metal",
        "hip-hop",
        "holidays",
        "honky-tonk",
        "house",
        "idm",
        "indian",
        "indie",
        "indie-pop",
        "industrial",
        "iranian",
        "j-dance",
        "j-idol",
        "j-pop",
        "j-rock",
        "jazz",
        "k-pop",
        "kids",
        "latin",
        "latino",
        "malay",
        "mandopop",
        "metal",
        "metal-misc",
        "metalcore",
        "minimal-techno",
        "movies",
        "mpb",
        "new-age",
        "new-release",
        "opera",
        "pagode",
        "party",
        "philippines-opm",
        "piano",
        "pop",
        "pop-film",
        "post-dubstep",
        "power-pop",
        "progressive-house",
        "psych-rock",
        "punk",
        "punk-rock",
        "r-n-b",
        "rainy-day",
        "reggae",
        "reggaeton",
        "road-trip",
        "rock",
        "rock-n-roll",
        "rockabilly",
        "romance",
        "sad",
        "salsa",
        "samba",
        "sertanejo",
        "show-tunes",
        "singer-songwriter",
        "ska",
        "sleep",
        "songwriter",
        "soul",
        "soundtracks",
        "spanish",
        "study",
        "summer",
        "swedish",
        "synth-pop",
        "tango",
        "techno",
        "trance",
        "trip-hop",
        "turkish",
        "work-out",
        "world-music"
    ]
}
    private options={
        minSize: 1,
        maxSize: 30,
    }
}


</script>

<style scoped>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

body{
    background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}

.content-container{
    overflow: hidden;
    position: relative;
    left: 450px;
    background: white;
    width: 1000px;
    height: 969px;
}

.slct-art-container{
    width: 998px;
    height: 860px;
    position: relative;
    top: 103px;
}

.slct-3-art-text{
    overflow-x: hidden;
    font-family: "spoof";
    font-size: 30px;
    color: black;
    text-align: center;
}

.slct-art-card-container{
    overflow-y: scroll;
    overflow-x: hidden !important;
    display: grid;
    grid-template-columns: repeat(5, 194px);
    grid-template-rows: repeat(3,235px);
    width: 970px;
    height: 650px;
    padding-top: 24px;
    padding-left: 24px;
}

.sart-card{
    width: 150px;
    height: 200px;
}

.sart-img{
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
}

.sart-text{
    text-align: center;
    font-family: "spoof";
    color: black;
}

.searchinput{
    font-size: 16px;
    font-family: "spoof";
    color: white;
    background-color: rgb(180, 180, 180);
    width: 464px;
    height: 40px;
    border-radius: 500px;
    border: none;
    padding-left: 26px;
    z-index: 0;
    caret-color: white;
    position: relative;
    top: 50px;
    left: 260px;
}

.searchinput::placeholder{
    color: white;
    font-family: "spoof";
    font-size: 16px;
}

input:focus{
    outline: none;
}

input:focus::placeholder {
  color: transparent;
}

.searchbtn{
    width: 30px;
    height: 30px;
    position: relative;
    top: 59px;
    left: 218px;
    background: inherit;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: none;
    z-index: 2;
}

.sboximg{
    position: relative;
    top: 57px;
    left: 190px;
    z-index: 1;
}

::-webkit-scrollbar{
    width: 5px;
}
::-webkit-scrollbar-track{
    background: transparent;
}
::-webkit-scrollbar-thumb{
    background: #ffeea9;
    border-radius: 100vw;
}

.next-btn{
    padding-bottom: 5px;
    color: white;
    border-radius: 4px;
    border: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: rgb(29, 29, 29);
  font-family: "Segoe UI";
  font-size: 24px;
  outline: none;
  margin: auto;
  display: block;
    font-size: 24px;
    position: relative;
    top: -15px;
    left: 300px;
    width: 373px;
    height: 49px;
    outline: none;
    z-index: 1;
    transition: 0.1s linear;
}

.next-btn:hover{
    top: -12px;
    left: 303px;
}

.nbtn-shadow{
    border-radius: 3px;
    position: relative;
    top: -61.20px;
    left: 305px;
    border: 2px rgb(29, 29, 29) solid;
    width: 368px;
    height: 47px;
    z-index: 0;
}

</style>