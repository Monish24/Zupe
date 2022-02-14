<template>
   <div class="playlist-library" :style="{transform: `translateX(${open?'-220':'0'}px)`}">
            <div class="playlist-subcontainer">
                <span class="playlists">
                    Onesssssssssssssssssssssssss<br>
                    Two<br>
                    Three<br>
                    Four <br>
                    Five <br>
                    Six<br>
                    Seven<br>
                    Eight<br>
                    Nine<br>
                    Ten<br>
                    Eleven<br>
                    Twelve<br>
                    One<br>
                    Two<br>
                    Three<br>
                    Four <br>
                    Five <br>
                    Six<br>
                    Seven<br>
                    Eight<br>
                    Nine<br>
                    Ten<br>
                    Eleven<br>
                    Twelve<br>
                    One<br>
                    Two<br>
                    Three<br>
                    Four <br>
                    Five <br>
                    Six<br>
                    Seven<br>
                    Eight<br>
                    Nine<br>
                    Ten<br>
                    Eleven<br>
                    Twelve<br>
                    One<br>
                    Two<br>
                    Three<br>
                    Four <br>
                    Five <br>
                    Six<br>
                    Seven<br>
                    Eight<br>
                    Nine<br>
                    Ten<br>
                    Eleven<br>
                    Twelve<br>
                </span>
            </div>
            <div class="partition">

            </div>
            <div class="library-subcontainer">
                <div class="zuplogo">
                    <img src="@/assets/img/ZupeLogo.png" width="200px" alt="">
                </div>
                <div class="Home">
                <router-link style="text-decoration: none; color: inherit;" to='/dashboard'>
                    <span class="img-home">
                        <img src="@/assets/img/Home0.png">
                    </span>
                    <b>Home</b>
                </router-link>
                </div>
                <div class="Library">
                <router-link style="text-decoration: none; color: inherit;" to='/userLibrary'>
                    <span class="img-library">
                        <img src="@/assets/img/library.png">
                    </span>
                </router-link>
                    <b>Library</b>
                </div>
                <div class="Search">
                <router-link style="text-decoration: none; color: inherit;" to='/searchboard'>
                    <span class="img-search">
                        <img src="@/assets/img/search.png">
                    </span>
                <b>Search</b>
                </router-link>
                </div>
                <div class="CreatePlaylist">
                    <span class="img-cp">
                        <img src="@/assets/img/createPlaylist.png">
                    </span>
                    <b>Create Playlist</b>
                </div>

            </div>
            <div class="sidebar1">
                <router-link style="text-decoration: none; color: inherit;" to='/dashboard'>
                <transition name="fade">               
                    <span v-if="showImage" class="img-homesb" key="1">
                        <img src="@/assets/img/Home0.png">
                    </span>
                </transition>
                </router-link>
                <router-link style="text-decoration: none; color: inherit;" to='/userLibrary'>
                <transition name="fade">
                    <span v-if="showImage" class="img-librarysb" key="2">
                        <img src="@/assets/img/library.png">
                    </span>
                </transition>
                </router-link>
                <router-link style="text-decoration: none; color: inherit;" to='/searchboard'>
                <transition name="fade">
                    <span v-if="showImage" key="3" class="img-searchsb" >
                        <img  src="@/assets/img/search.png">
                    </span>              
                </transition>
                </router-link>
                <input class="toggleOpencb" @click="toggleOpen" v-model="sidebar1cb" type="checkbox" id="cb1">
                <input type="text" v-model="openclose" placeholder="Open" class="toggleOpen">
            </div>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  
})
export default class sidebar1 extends Vue {
    private testurl1="https://i.scdn.co/image/ab67616d00001e02fb1cb900d28642e668d77b12"
    private open=true
    private openclose=""
    private sidebar1cb=""
    private showImage:boolean=true
    private toggleOpen(){
        this.open=!this.open
        if (this.sidebar1cb != "") {
            this.openclose="Open"
            this.showImage=true
        }
        else{
            this.openclose="Close"
            this.showImage=false
        }
    }
}
</script>

<style>

.playlist-library{
    font-family: "spoof";
    color: #685f83;
    width: 250px;
    height: 879px;
    background: #221f2b;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 3;
    transition: transform 600ms ease-in-out;
}

.playlist-subcontainer{
    overflow: auto;
    width: 220px;
    height: 620px;
    background: #221f2b;
    position: fixed;
    top: 290px;
    left: 0px;
    z-index: 5;
}

.partition{
    padding-right: 20px;
    border-top: 1px solid #453f57;
    background: white;
    width: 180px;
    height: 0px;
    position: relative;
    top: 280px;
    left: 18px;
    z-index: 0;
}

.library-subcontainer{
    width: 220px;
    height: 270px;
    background: #221f2b;
    position: relative;
    top: 0px;
    left: 0px;}

.playlists{
    overflow: hidden;
    white-space:nowrap;
    display: inline-block;
    max-width: 180px;
    max-height: 587;
    text-overflow: ellipsis;
    transition: 0.3s;
    position: relative;
    right: -18px;
    bottom: -6px;
}

*{
    box-sizing: border-box;
}

::-webkit-scrollbar{
    width: 5px;
}
::-webkit-scrollbar-track{
    background: #292534;
}
::-webkit-scrollbar-thumb{
    background: #d284ff;
    border-radius: 100vw;
}

.playlists:hover{
    color: #81789d;
}

.Home{
    transition: 0.3s;
    padding-top: 7px;
    padding-left: 60px;
    width:220px;
    height: 40px;
    position: relative;
    top: 100px;
    right: 3px;
}

.Home:hover{
    color: white;
    opacity: 1;
}

.img-home:hover{
    opacity: 1;
}

.Library{
    transition: 0.3s;
    padding-top: 7px;
    padding-left: 60px;
    width:220px;
    height: 40px;
    position: relative;
    top: 100px;
    right: 3px;
}

.Library:hover{
    color: white;
    opacity: 1;
}

.img-library:hover{
    opacity: 1;
}

.Search{
    transition: 0.3s;
    padding-top: 7px;
    padding-left: 60px;
    width:220px;
    height: 40px;
    position: relative;
    top: 100px;
    right: 3px;
}

.Search:hover{
    color: white;
    opacity: 1;
}

.img-search:hover{
    opacity: 1;
}

.CreatePlaylist{
    transition: 0.3s;
    padding-top: 7px;
    padding-left: 60px;
    width:220px;
    height: 40px;
    position: relative;
    top: 100px;
    right: 3px;
}

.CreatePlaylist:hover{
    color: white;
    opacity: 1;
}

.img-cp:hover{
    opacity: 1;
}

.FriendsPlaylists{
    transition: 0.3s;
    padding-top: 7px;
    padding-left: 60px;
    width:220px;
    height: 40px;
    position: relative;
    top: 60px;
    right: 3px;
}

.FriendsPlaylists:hover{
    color: white;
    opacity: 1;
}

.img-fp:hover{
    opacity: 1;
}

.img-home{
    width: 200px;
    height: 30px;
    transition: 0.3s;
    opacity: 0.6;
    position: fixed;
    left: 20px;
}

.img-library{
    width: 200px;
    height: 30px;
    transition: 0.3s;
    opacity: 0.6;
    position: fixed;
    left: 20px;
}

.img-search{
    width: 200px;
    height: 30px;
    transition: 0.3s;
    opacity: 0.6;
    position: fixed;
    left: 20px;
}

.img-cp{
    width: 200px;
    height: 30px;
    transition: 0.3s;
    opacity: 0.6;
    position: fixed;
    left: 20px;
    top: 226px;
}

.img-fp{
    width: 200px;
    height: 30px;
    transition: 0.3s;
    opacity: 0.6;
    position: fixed;
    left: 20px;
    top: 226px;
}

.sidebar1{
    background: #1c1924;
    width: 30px;
    height: 920px;
    position: fixed;
    top: 0px;
    left: 220px;
}

.toggleOpen{
    transition: transform 0.3s;
    font-weight:lighter;
    font-family: "spoof";
    color: #ffeea9;
    font-size: 20px;
    -webkit-transform: rotate(90deg);
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    pointer-events: none; 
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    position: fixed;
    top: 505px;
    left: 100px;
    z-index: 1;
}

.toggleOpen::placeholder{
    font-family: "spoof";
    color: #ffeea9;
    font-size: 20px;
}

.toggleOpencb{   
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px;
    position: fixed;
    top: 385px;
    left: 220px;
    width: 26px;
    height: 53.97px;
    z-index: 2;
	padding: 0;
    transition: 00.3s;
}

.img-homesb{
    visibility: unset;
    opacity: 0.6;
    position: relative;
    top: 23px;
    left: 3px;
}

.img-homesb:hover{
    opacity: 1;
}

.img-librarysb{
    visibility: unset;
    opacity: 0.6;
    position: relative;
    top: 35px;
    left: 3px;
}

.img-librarysb:hover{
    opacity: 1;
}

.img-searchsb{
    visibility: unset;
    opacity: 0.6;
    position: relative;
    top: 50px;
    left: 3px;
}

.img-searchsb:hover{
    opacity: 1;
}

.fade-leave-active, .fade-enter-active{
  transition: opacity 0.3s ease-out;
  white-space: nowrap;
}
.fade-leave-to{
  transition: opacity 0.3s ease-in;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.zuplogo{
    position: absolute;
    top: 30px;
    left: 10px;
}
</style>
