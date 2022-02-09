<template>
<div class="wrapp">
    <div class="content-container">
            <div class="slct-art-container">
                <div class="slct-3-art-text">
                    Select 3 of your favorite genres
                </div>
                <div class="slct-genre-card-container">
                    <div class="sgenre-card" :style="[ selectedgenre.indexOf(genre) !== -1 ? { 'background' : 'yellow', 'border' : '2px black solid'}  : {  }]" v-for="genre in results.genres" :key="genre">  
                       <label class="sgenre-text">
                           {{ genre }}
                       </label>
                        <input class="cbgenre" v-bind:value="genre" :disabled="selectedgenre.length > 2 && selectedgenre.indexOf(genre) === -1" v-model="selectedgenre" type="checkbox" :refs="genre">             
                    </div>
                </div>
            </div>
            <button class="next-btn" @click="next" v-if="selectedgenre.length > 2">Next</button>
            <div class="nbtn-shadow" v-if="selectedgenre.length > 2"></div>
        </div>
        </div>
</template>

<script lang="ts">
import { vxm } from "@/store";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
})

export default class genreselect extends Vue{
    private uid=''
    private u = vxm.playerStore.umail
    private p = vxm.playerStore.upass
    async mounted(){
        try {
        const tmp = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: this.u,
                password: this.p
            })
        })

        this.uid = await tmp.json()
        console.log(this.uid)
        } catch (e) {
        console.log(e)
        }
        vxm.playerStore.uid = this.uid
    }
    private async next(){
    this.uid = vxm.playerStore.uid
    console.log(this.uid)
    try {
        const tmp = await fetch('http://localhost:3000/api/uidinit2', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uid: this.uid
            })
        })
        } catch (e) {
        console.log(e)
        }
        this.$nextTick(() => {
            try {
            fetch('http://localhost:3000/api/genre', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                favgenres: this.selectedgenre,
                uid: "30d09554-b785-483c-a253-223474c994a7"
            })
        })
        } catch (e) {
        console.log(e)
        }
        })
        this.$router.push('/artistsselect')
    }
    private selectedgenre=[]
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

.wrapp{
    height: 969px;
    width: 100%;
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

.slct-genre-card-container{
    margin-top: 10px !important;
    overflow-y: scroll;
    overflow-x: hidden !important;
    display: grid;
    grid-auto-flow: row;
    row-gap: 20px   ;
    grid-template-columns: auto auto auto;
    grid-column-gap: 37px;
    width: 970px;
    height: 650px;
    padding-top: 24px;
    padding-left: 24px;
}

.sgenre-card{
    text-align: center;
    border-radius: 4px;
    background-color: rgb(214, 214, 214);
    padding-top: 30px;
    width: 270px;
    height: 50px;
    z-index: 1;
}

.sgenre-card:hover{
    background-color: rgb(168, 168, 168);
}

.cbgenre{
    position: relative;
    top: -55px;
    width: 270px;
    height: 80px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    z-index: 2; 
}

.sgenre-text{
    font-size: 20px;
    text-align: center;
    font-family: "spoof";
    color: black;
    z-index: 0;
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