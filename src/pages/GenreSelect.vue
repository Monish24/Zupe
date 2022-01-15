<template>
    <div id="auth">
        <div class="main" v-for="cat in cats" :key="cat">
        <p>{{cats.body}}</p>
        <ul class="genres" v-for="genre in cats.genres" :key="genre">
        <span>{{genre}}</span>
        </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  
})

export default class genreselect extends Vue{
    private cats = {}
    
    mounted(){
        try {
        fetch('http://localhost:3000/api/getgenre', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        }).then(response => response.json()).then((data) => {this.cats = data; console.log(this.cats)}).catch(err => console.error(err));
        } catch (e) {
        console.log(e)}
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
  background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}

.authors{
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  border-bottom: 2px solid #ccc;
  padding: 20px;
}

.genres{
    font-family: "spoof";
    color: grey;
}
.genres:hover{
    color: white;
}
</style>