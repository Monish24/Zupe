<template>
    <div class="bg">
        <div class="cont-container">
            <div class="search-box">
                <input class="searchinput" v-model="searchQuery" v-on:input="searchAlbum" type="text" placeholder="Search for albums...">
                <button @click="searchAlbum" class="searchbtn"></button>
                <img class="sboximg" src="@/assets/img/search.png" height="" alt="">
            </div>
            
            <div class="al-slct-container">
                <div class="al-slct-text">
                    Drag and drop 3 of your favorite albums
                </div>
                <draggable class="selected-card-container" :list="resultsAlbums2" group="album">
                 <div class="al-slct-card" v-for="res in resultsAlbums2" :key="res.uri">
                        <div class="img-cont">
                        <img v-if="res.images[0] && res.images[0].url" :src="res.images[0].url" width="200px" height="200px" alt="">
                            <img v-else src="@/assets/img/placeholder-imgnotfound.jpg" width="200px" height="200px" alt="">
                        </div>
                        <div class="al-name">
                            {{ res.name }}
                            <div class="al-art-name">
                                {{ res.artists[0].name }}
                            </div>
                        </div>
                    </div>
                </draggable>
                    <draggable :move="checkdrag" class="al-slct-card-container" :list="resultsAlbums" group="album">
                    <div class="al-slct-card" v-for="res in resultsAlbums" :key="res.uri">
                        <div class="img-cont">
                        <img v-if="res.images[0] && res.images[0].url" :src="res.images[0].url" width="200px" height="200px" alt="">
                            <img v-else src="@/assets/img/placeholder-imgnotfound.jpg" width="200px" height="200px" alt="">
                        </div>
                        <div class="al-name">
                            {{ res.name }}
                            <div class="al-art-name">
                                {{ res.artists[0].name }}
                            </div>
                        </div>
                    </div>
                    </draggable>
                
                <router-link style="text-decoration: none; color: inherit;" to='/login'>
                <button v-if="resultsAlbums2.length > 2" @click="finish" class="next-btn">finsih</button>
                </router-link>
                <div v-if="resultsAlbums2.length > 2" class="nbtn-shadow"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import draggable from 'vuedraggable'

import { Component } from "vue-property-decorator";
@Component({
  components: {draggable}
})

export default class albumsselect extends Vue{
    private uid=''
    private checkdrag(){
        return this.resultsAlbums2.length < 3
    }

    private async finish(){
        // this.$nextTick(() => {
            try {
            fetch('http://localhost:3000/api/albums', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                favalbum1: this.resultsAlbums2[0].id,
                favalbum2: this.resultsAlbums2[1].id,
                favalbum3: this.resultsAlbums2[2].id
            })
        })
        } catch (e) {
        console.log(e)
        }
        // })
    }
    private selectedalbums=["4LH4d3cOWNNsVw41Gqt2kv","0WizSRN8LuMWhliou9PFlg","20r762YmB5HeofjMCiPMLv"]
    private resultsAlbums=[]
    private resultsAlbums2:any=[]
    private searchQuery=""
    private async searchAlbum(){
        if(this.searchQuery){
        await fetch('http://localhost:3000/api/sendquery', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                searchQuery: this.searchQuery
            })
        })

        try {
            const tmp = await fetch('http://localhost:3000/api/searchAlbums', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resultsAlbums = await tmp.json()
            console.log(this.resultsAlbums)

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
body{
    font-family: "spoof";
}
.bg{
    height: 1210px;
    width: 100%;
    background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}



.cont-container{
    background-color: white;
    width: 1000px;
    height: 1208px;
    position: relative;
    left: 430px;
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

.al-slct-container{
    
    width: 998px;
    height: 814px;
    position: relative;
    top: 103px;
}

.al-slct-text{
    margin-bottom: 10px !important;
    font-size: 30px;
    font-family: "spoof";
    color: black;
    text-align: center;
}

.selected-card-container{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    background-color: rgb(224, 224, 224);
    padding-top: 24px;
    padding-left: 24px;
    gap: 30px;
    display: flex;
    flex-direction: row;
    width: 979px;
    height: 260px;
}

.al-slct-card-container{
    overflow-y: scroll;
    overflow-x: hidden !important;
    display: grid;
    grid-template-columns: repeat(4, 248px);
    grid-template-rows: repeat(3,265px);
    padding-left: 24px;
    padding-top: 24px;
    width: 970px;
    height: 502px;
}

.al-slct-card{
    width: 200px;
    height: 250px;
}

.img-cont{
    border-radius: 4px;
    overflow: hidden;
    width: 200px;
    height: 200px;
}

.al-name{
    padding-left: 3px;
    font-size: 16px;
    color: black;
}

.al-art-name{
    font-size: 12px;
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
    top: 48px;
    left: 300px;
    width: 373px;
    height: 49px;
    outline: none;
    z-index: 1;
    transition: 0.1s linear;
}

.next-btn:hover{
    top: 51px;
    left: 303px;
}

.nbtn-shadow{
    border-radius: 3px;
    position: relative;
    top: 1.8px;
    left: 305px;
    border: 2px rgb(29, 29, 29) solid;
    width: 368px;
    height: 47px;
    z-index: 0;
}
</style>