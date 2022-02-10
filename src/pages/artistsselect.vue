<template>
    <div class="wrapp">
        <div class="content-container">
            <div class="search-box-art">
                <input class="searchinput" v-model="searchQuery" v-on:input="searchart" type="text" placeholder="Search for artists...">
                <button @click="searchart" class="searchbtn"></button>
                <img class="sboximg" src="@/assets/img/search.png" alt="">
            </div>
            <div class="slct-art-container">
                <div class="slct-3-art-text">
                    Drag and drop 3 of your favorite artists
                </div>
                
                
                    <draggable class="selected-cards-container" :list="resultsArtists2" group="artist">
                        <div class="sart-card" v-for="res in resultsArtists2" :key="res.key">
                        <div class="sart-img">
                            <img v-if="res.images[0] && res.images[0].url" :src="res.images[0].url" width="150px" height="150px" alt="">
                            <img v-else src="@/assets/img/placeholder.png" width="150px" height="150px" alt="">
                        </div>   
                       <div class="sart-text">
                           {{ res.name }}
                        </div>
                                       
                    </div>
                    </draggable>
                
                
                
                    <draggable :move="checkdrag" class="slct-art-card-container" :list="resultsArtists" group="artist">
                    <div class="sart-card" v-for="res in resultsArtists" :key="res.key" draggable="false">
                        <div class="sart-img">
                            <img v-if="res.images[0] && res.images[0].url" :src="res.images[0].url" width="150px" height="150px" alt=""  draggable="false">
                            <img v-else src="@/assets/img/placeholder.png" width="150px" height="150px" alt="">
                        </div>   
                       <div class="sart-text">
                           {{ res.name }}
                        </div>               
                    </div>
                    </draggable>
                
            </div>
            <router-link style="text-decoration: none; color: inherit;" to='/albumsselect'>
            <button @click="next" class="next-btn">Next</button>
            </router-link>
            <div class="nbtn-shadow"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import draggable from 'vuedraggable'
import { Component } from "vue-property-decorator";

@Component({
    components: { draggable }
})

export default class artistsselect extends Vue{
    private checkdrag(){
        return this.resultsArtists2.length < 3
    }

    private next(){
        console.log(this.resultsArtists2)
       this.$nextTick(() => {
            try {
            fetch('http://localhost:3000/api/artists', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                favartist1: this.resultsArtists2[0].id,
                favartist2: this.resultsArtists2[1].id,
                favartist3: this.resultsArtists2[2].id
            })
        })
        } catch (e) {
        console.log(e)
        }
        })
    }
    private resultsArtists=[]
    private resultsArtists2:any=[]
    private searchQuery=""
    private selectedartists=[]
    private selectedgenreREAL=[]
    private async searchart(){
        if(this.searchQuery){
        await fetch('http://localhost:3000/api/sendquery', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                searchQuery: this.searchQuery
            })
        })
        try {
            const tmp = await fetch('http://localhost:3000/api/searchArtists', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resultsArtists = await tmp.json()
            console.log(this.resultsArtists)

        } catch (e) {
            console.log(e)
        }
    }}
}

</script>

<style scoped>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

.wrapp{
    background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}

.content-container{
    overflow: hidden;
    margin: 0px auto !important;
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
    margin-bottom: 10px !important;
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
    position: relative;
    width: 970px;
    height: 450px;
    padding-top: 24px;
    padding-left: 24px;
}

.selected-cards-container{
    border-top: 1px grey solid;
    border-bottom: 1px grey solid;
    background-color: rgb(235, 235, 235);
    display: flex;
    gap: 30px;
    padding-top: 24px;
    padding-left: 24px;
    width: 994px;
    height: 200px;
}

.sart-card{
    width: 150px;
    height: 200px;
}

.cbgenre{
    position: relative;
    top: -190px;
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