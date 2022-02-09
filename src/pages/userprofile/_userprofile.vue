<template>
    <div class="bg">
        <div class="bgbluruser"></div>
        <div class="user-upper-container">
            <div class="userphotoprofile">
                <img src="@/assets/img/placeholder.png" height="250px" width="250px" alt="PP">
            </div>
            <div class="userinfo-profile">
                <span class="name-profile">Monish Shah<br></span>
                <span class="noof-playlists">11 Playlists<br></span>
                <span class="descr-profile">We Don't know much about Monish Shah yet <br>but we're sure they're awesome!</span>
            </div>
            <button class="edt-button">Edit Profile</button>
        </div>
        <div class="user-lower-container">
            <div class="top3songs">
                <div class="title-profile">
                    Top Songs
                </div>
                <div class="topsongs-cont">
                    <div class="topsongs-card">
                        <img class="topsongs-img" src="@/assets/img/placeholder.png" height="100px" width="100px" alt="">
                    <div class="topsongs-txt">
                        Song name <br>
                        <span class="subt">Artist name</span>
                    </div>
                    </div>   
                </div>
            </div>
            <div class="recently-played">
                <div class="title-profile">
                    Recently played
                </div>
                <div class="recentalbums">
                    <div class="albumscards">
                        <div class="recent-cards">
                        <img class="topsongs-img" src="@/assets/img/placeholder.png" height="240px" width="240px" alt="">
                        <div class="rp-text">
                            Album name <br>
                            <span class="subt">Artist Name</span> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top3artists">
                <div class="title-profile">
                    Top Artists
                </div>
                <div class="topart-card-container">
                    <div class="topart-card">
                        <img class="artimg" src="@/assets/img/placeholder.png" height="150px" width="150px" alt="">
                        <div class="topart-txt">
                            Artist name
                        </div>
                    </div>
                </div>
            </div>
            <div class="recently-played">
                <div class="title-profile">
                    Top Albums
                </div>
                <div class="recentalbums">
                    <div class="albumscards">
                        <div class="recent-cards">
                        <img class="topsongs-img" src="@/assets/img/placeholder.png" height="240px" width="240px" alt="">
                        <div class="rp-text">
                            Album name <br>
                            <span class="subt">Artist Name</span> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="top3albums">
                <div class="title-profile">
                    Top Albums
                </div>
            </div> -->
            <div class="recently-played">
                <div class="title-profile">
                    Your Playlists
                </div>
                <div class="recentalbums">
                    <div class="albumscards">
                        <div class="recent-cards">
                        <img class="topsongs-img" src="@/assets/img/placeholder.png" height="240px" width="240px" alt="">
                        <div class="rp-text">
                            Album name <br>
                            <span class="subt">Artist Name</span> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"


import { Component } from "vue-property-decorator";

@Component({
  layout: "contentarea"
})

export default class userprofile extends Vue{

}

</script>

<style scoped>

.bg{
  font-family: "spoof";
  overflow: hidden; 
  position: relative; 
  left: 30px ;
  width: 1860px;
  height: 890px;
  background: #2e2a3a;
}

.bgbluruser{
  background-color: #ffeea9;
  /* background-repeat: no-repeat;
  animation: marquee 30s infinite linear ; */
  filter: blur(10px);
  position: absolute;
  width: 1860px;
  height: 380px;
  z-index: 0;
}

.user-upper-container{
    display: flex;
    width: 1860px;
    height: 400px;
    z-index: 1;
    padding-left: 50px;
    padding-top: 50px;
}

.userphotoprofile{
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
}

.userinfo-profile{
    position: relative;
    top: 34px;
    left: 40px;
    width: 1500px;
    height: 200px;
}

.name-profile{
    color: #2e2a3a;
    font-size: 50px;
}

.noof-playlists{
    color: #2e2a3a;
    font-size: 25px;
}

.descr-profile{
    position: relative;
    top: 20px;
    color: #2e2a3a;
    font-size: 16px;
}

.edt-button{
    border-radius: 4px;
    font-size: 18px;
    font-family: "spoof";
    color: white;
    background: #2e2a3a;;
    border: none;
    outline: none;
    position: relative;
    left: -50px;
    top: 230px;
    width: 150px;
    height: 50px;
}

.user-lower-container{
    overflow: auto;
    height: 490px;
}

.top3songs{
    padding-right: 10px;
    padding-left: 10px;
    height: 233px;
}

.title-profile{
    font-size: 20px;
    color: white;
    height: 40px;
}

.topsongs-cont{
    border-top: rgba(95, 95, 95, 0.438) 1px solid ;
    display: flex;
    flex-direction: row;
    gap: 40px;
    height: 182px;
    padding-top: 24px;
    padding-left: 24px;
}

.topsongs-card{
    display: flex;
    flex-direction: row;
    gap: 35px;
    border-radius: 4px;
    width: 422px;
    height: 130px;
    background: #453f58;
    backdrop-filter: blur(5px);
    padding-top: 15px;
    padding-left: 15px;
}

.topsongs-img{
    border-radius: 4px;
}

.topsongs-txt{
    font-size: 14px;
    color: white;
    width: 400px;
    height: 100px;
    padding-top: 30px;
}

.recently-played{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    height: 360px;
}

.recentalbums{
    padding-top: 20px;
    border-top: rgba(95, 95, 95, 0.438) 1px solid;
    padding-left: 20px;
    width: 100%;
    height: 300px;
}

.recent-cards{
    color: white;
    width: 240px;
    height: 300px;   
}

.top3artists{
    padding-left: 15px;
    padding-right: 15px;
    height: 250px;
}

.topart-card-container{
    border-top: rgba(95, 95, 95, 0.438) 1px solid;
    padding-top: 20px;
    padding-left: 20px;
}

.topart-card{
    text-align: center;
    height: 187px;
    width: 150px;
}

.artimg{
    border-radius: 50%;
}

.topart-txt{
    font-size: 13px;
    margin-top: 3px !important;
    font-family: "spoof";
    color: white;
}
</style>