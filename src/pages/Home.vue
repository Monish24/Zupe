<template>
  <div class="wrap">
  <div class="bg">
    <div class="top-section">
      <div class="titles">
        <div class="title-zupe">
        Zupe
        </div>
        <div class="title-overview">
       <router-link  to='/overview'>Overview</router-link>
        </div>
        <div class="title-about">
        <router-link to='/aboutus'>About Us</router-link>
        </div>
        <div class="title-login">
        <router-link to= '/login'>Login</router-link>
        </div>
        <div class="title-signup">
          <div class="text">
          <router-link to='/signup'>Sign Up</router-link>
          </div>
        <div class="imageheaderzupe">
          <img src="..\assets\introzupe.png"/>
        </div>
        <div class="tagline">
          <img src="..\assets\introtextr.png">
        </div>
        <div class="sub-tagline">
          Play from millions of songs, curated playlists while interacting with other users and make yourown personalised profile to be displayed to everyone else
        </div>
        <div class="start-using">
          <div class="arrowwavy">
          <img src="..\assets\fullrightarrow.png" width="300" height="300"/>
          </div>
          <div class="text2">
          Start using Zupe
          </div>
        </div>
        <div class="substart-using">
        </div>
        <div class="user-inter">
          <img src="..\assets\userinter.jpg" />
        </div>
        <div class="text3">
          "Our lives are shaped by our interactions with others. Whether we have a long conversation with a friend or simply place an order at a restaurant, every interaction makes a difference.”<br> - Donald O. Clifton
        </div>
        <div class="working">
          See how it works
        </div>
        <div class="messaging-container">
        </div>
        <div class="msgin-img">
          <img src="..\assets\guide-image.7b9952b.png" />
        </div>
        <div class="img-txt-msg">
          <img src="..\assets\msg-text.jpg" alt="">
        </div>
        <div class="subtext-msgin">
        Message other users in a private chat, comment on songs, discover new people through your activities on the site and keep updating your own profile to keep it fresh
        </div>
        <div class="working-msging">
          See how it works
        </div>
        <div class="goals-container">  
        </div>
        <div class="goals-img">
          <img src="..\assets\goalsimg.png" />
        </div>
        <div class="text-goals">
          Our Goals are Beyond <br> your Understanding...
        </div>
        <div class="imgheader-shadow">
        </div>
        <div class="subtext-goals">
          Only if you've been living under a rock, because interacting with <br>people is what life is all about!
        </div>
        <div class="subcontainer-goals">
        </div>
        <div class="subcontainer-goals-shadow">  
        </div>
        <div class="cmftlstn">
          Comfortable Listening
        </div>
        <div class="dscmsc">
          Discover Music
        </div>
        <div class="interaction">
          User Interaction
        </div>
        <div class="acntprszn">
          Account Personalization
        </div>
        <div class="cmftlstn-subtext">
          Create an environment where the user can comfortably listen to their favorite songs or playlists and navigate easily through the website
        </div>
        <div class="dscmsc-subtext">
          People should also be able to find new music based on their previous listens, without much effort
        </div>
        <div class="interaction-subtext">
          Zupe wants Users to interact with other users and know what each other's music taste is
        </div>
        <div class="acntprszn-subtext">
          Users should be able to get songs recommended to them based on their previous listens and selected preferences
        </div>
        <div class="working-goals">
          See how it works
        </div>
        <div class="keep-track-container">
        </div>
        <div class="keep-track-shadow">
        </div>
        <div class="top3-container">
        </div>
        <div class="top3-shadow">
        </div>
        <div class="custom-playlists-container">
        </div>
        <div class="custom-playlists-shadow">
        </div>
        <div class="img-keeptrack">
          <img src="..\assets\chart.64d6751.png" />
        </div>
        <div class="img-top3">
          <img src="..\assets\chart2.43417b8.png" />
        </div>
        <div class="img-customplaylists">
          <img src="..\assets\puzzle.eaafbc5.png" />
        </div>
        <div class="txt-keeptrack">
          Keep Track
        </div>
        <div class="subtext-keeptrack">
          Of how many times you have listened to a particular song, artist, genre, album every month.
        </div>
        <div class="txt-top3">
          Display Top
        </div>
        <div class="subtext-top3">
          3 favourite songs of your on your profile, if not set it would be set as your 3 most listened songs. Any feature including this can be hidden or displayed.
        </div>
        <div class="txt-customplaylists">
          Make Custom Playlists
        </div>
        <div class="subtext-customplaylists">
          And share it with everyone on the platform. You can also listen to playlists from other users of the website
        </div>
        <div class="enteremail-box">
        </div>
        <div class="img-entermail-box">
          <img src="..\assets\new_cta.c414983.png" />
        </div>
        <div class="txt-entermail-box">
          Want updates via E-mail? <br> Enter you E-mail ID below.
        </div>
        <div class="txtbox-entermail">
          <form>
            <input type="text" name="recup-user-email" placeholder="Enter you E-mail ID here."/> 
            <button>Submit</button>
          </form>
        </div>
        <div class="infobox">
        </div>
        <div class="zupe-bottom">
          Zupe 
        </div>
        <div class="bottom-links1">
          Home <br><br> Overview <br><br> About Us
        </div>
        <div class="bottom-links2">
          Twitter <br><br> Facebook <br><br> Instagram <br><br> LinkedIn
        </div>
        <div class="bottom-links3">
          Careers <br><br> Terms of Use <br><br> Privacy Policy
        </div>
        <div class="copyright">
          2021 ©
        </div>
        <div class="code">
          <button @click="spotifylogin"> Spotify Login </button> 
          <!-- <button @click="searchTrack"> Search track </button>  -->
        </div>
        </div>
      </div>
    </div> 
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator";


var AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a1602b112de54d6ca8f0cdc51a1f831f&response_type=code&redirect_uri=http://localhost:8080/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

@Component({
  
})

export default class Home extends Vue{

  private spotifylogin(){
    window.location.assign(AUTH_URL);
  }
}



</script>

<style scoped>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

.bg{
  height: 5000px;
  background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}

.title-zupe{
  font-size: 23px;
  color: #191716;
  font-family: "spoof";
  position: relative;
  right: 600px;
  top: 20px;

}
.title-overview{
  font-size: 20px;
  color: black;
  font-family: "spoof";
  position: absolute;
  top: 32px;
  right: 800px;
}
.title-about{
  font-size: 20px;
  color: black;
  font-family: "spoof";
  position: absolute;
  top: 32px;
  right: 670px;
}
.title-login{
  font-size: 20px;
  color: black;
  font-family: "spoof";
  position: absolute;
  top: 32px;
  right: 570px;
}
.title-signup{
  width: 150px;
  height: 50px;
  background-color: #29C78C;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  font-family: "spoof";
  position: absolute;
  top: 25px;
  right: 380px;
}
.text{
  position: absolute;
  top: 10px;
  right: 40px;
}
.imageheaderzupe{
  position: absolute;
  top: 100px;
  right: 100px;
  left: -370px;
}
.tagline{
  position: absolute;
  top: 220px;
  right: 820px;
  font-size: 40px;
  width: 400px;
  height: 300px;
  color: black;
  font-family: "spoof";
  text-align: left;
}
.sub-tagline{
  font-size: 22px;
  position: absolute;
  top: 375px;
  right: 665px;
  width: 547px;
  color: #6C7078;
  text-align: left;
}
.start-using{
  font-size: 22px;
  position: absolute;
  top: 530px;
  right: 865px;
  color: black;
  width: 347px;
  height: 60px;
  background-color:white;
  border-radius: 5px;
  justify-content: center;
  transition: 00.2s ease-in;
  background-clip: padding-box;
  z-index: 1;
}
.start-using:before{
  content: '';
  position: absolute;
  top: 533px;
  right: 860px;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  border:1px solid tra;
}
.start-using:hover{
  top: 533px;
  right: 860px;
  transition: 00.2s ease-out;
}
.text2{
  position: absolute;
  top: 14px;
  right: 150px;
  font-family: "spoof";
  color: #6C7078;
}
.substart-using{
  position: absolute;
  top: 535px;
  right: 857px;
  width: 347px;
  height: 60px;
  border :1px solid white;
  border-radius: 5px;
}
.arrowwavy{
  height: 0%;
  width: 0%;
  position: absolute;
  top: -117px;
  right: 130px;
  border: 1px green;
}
.user-inter{
  position: absolute;
  top: 1000px;
  right: 100px;
}
.text3{
  font-size: 22px;
  width: 506px;
  position: absolute;
  top: 1150px;
  right: 95px;
  font-family: "spoof";
  color: #6C7078;
  text-align: left;
}
.working{
  font-size: 22px;
  width: 190px;
  position: absolute;
  top: 1330px;
  right: 417px;
  color: #191716;
}
.messaging-container{
  width: 1300px;  
  height: 430px;
  position: absolute;
  top: 1700px;
  right: 50px;
  left: -1070px;
  border: 4px solid white;
  border-radius: 3px;
}
.msgin-img{
  background-color: #DBE0F0;
  position: absolute;
  top: 1500px;
  right: 100px;
}
.img-txt-msg{
  position: absolute;
  top: 1950px;
  right: 740px;
}
.subtext-msgin{
  position: absolute;
  top: 1960px;
  right: 50px;
  width: 550px;
  color: black;
  text-align: left;
}
.working-msging{
  font-size: 22px;
  width: 190px;
  position: absolute;
  top: 2070px;
  right: 417px;
  color: #191716;
}
.goals-container{
  width: 1300px;
  height: 650px;
  position: absolute;
  top: 2400px;
  right: -80px;
  background: linear-gradient(to bottom,#B6E9DF,#BFDEEA);
  border-radius: 6px;
}
.goals-img{
  position: absolute;
  top: 2300px;
  right: 800px;
}
.text-goals{
  width: 700px;
  position: absolute;
  top: 2450px;  
  right: 40px;
  font-family: "spoof";
  color: black;
  font-size: 60px;
  line-height: 70px;
  text-align: left;
}
.subtext-goals{
  width: 700px;
  position: absolute;
  top: 2629px;  
  right: 37px;
  font-family: "spoof";
  color: #6C7078;
  font-size: 22px;
  text-align: left;
}
.subcontainer-goals{
  position: absolute;
  top: 2730px;
  right: 0px;
  width: 736px;
  height: 230px;
  background-color: white;
  border-radius: 0.27vw;
}
.subcontainer-goals-shadow{
  position: absolute;
  top: 2735px;
  right: -7px;
  width: 736px;
  height: 230px;
  border: 1px solid white;
  border-radius: 0.27vw;
}
.cmftlstn{
  width: 220px;
  font-family: "spoof";
  font-size: 20px;
  color: black;
  position: absolute;
  top: 2750px;
  right: 500px;
}
.cmftlstn-subtext{
  width: 350px;
  position: absolute;
  top: 2780px;
  right: 367px;
  color: #6C7078;
  text-align: left;
  font-size: 14px;
}
.dscmsc{
  width: 220px;
  font-family: "spoof";
  font-size: 20px;
  color: black;
  position: absolute;
  top: 2750px;
  right: 174px;
}
.dscmsc-subtext{
  width: 350px;
  position: absolute;
  top: 2780px;
  right: 5px;
  color: #6C7078;
  text-align: left;
  font-size: 14px;
}
.interaction{
  width: 220px;
  font-family: "spoof";
  font-size: 20px;
  color: black;
  position: absolute;
  top: 2850px;
  right: 530px;
}
.interaction-subtext{
  width: 300px;
  position: absolute;
  top: 2883px;
  right: 415px;
  color: #6C7078;
  text-align: left;
  font-size: 14px;
}
.acntprszn{
  width: 320px;
  font-family: "spoof";
  font-size: 20px;
  color: black;
  position: absolute;
  top: 2850px;
  right: 77px;
}
.acntprszn-subtext{
  width: 300px;
  position: absolute;
  top: 2883px;
  right: 55px;
  color: #6C7078;
  text-align: left;
  font-size: 14px;
}
.working-goals{
  font-size: 22px;
  width: 190px;
  position: absolute;
  top: 3000px;
  right: 300px;
  color: #191716;
}
.keep-track-container{
  position: absolute;
  top: 3300px;
  right: 830px;
  width: 336px;
  height: 230px;
  padding: 2.2vw 1.1vw 1.8vw 1.6vw;
  border: 0.13vw solid #fff;
  background-color: #DCE0F0;
  border-radius: 0.27vw;
  z-index: 1;
}
.top3-container{
  position: absolute;
  top: 3300px;
  right: 375px;
  width: 336px;
  height: 230px;
  padding: 2.2vw 1.1vw 1.8vw 1.6vw;
  border: 0.13vw solid #fff;
  border-radius: 0.27vw;
  background-color: #DCE0F0;
  z-index: 1;
}
.custom-playlists-container{
  position: absolute;
  top: 3300px;
  right: -80px;
  width: 336px;
  height: 230px;
  padding: 2.2vw 1.1vw 1.8vw 1.6vw;
  border: 0.13vw solid #fff;
  background-color: #DCE0F0;
  border-radius: 0.27vw;
  z-index: 1;
}
.keep-track-shadow{
  position: absolute;
  top: 3306px;
  right: 822px;
  width: 336px;
  height: 230px;
  padding: 2.2vw 1.1vw 1.8vw 1.6vw;
  border: 0.13vw solid #AEA7A5;
  border-radius: 0.27vw;
  z-index: 0;
}
.top3-shadow{
  position: absolute;
  top: 3306px;
  right: 367px;
  width: 336px;
  height: 230px;
  padding: 2.2vw 1.1vw 1.8vw 1.6vw;
  border: 0.13vw solid #AEA7A5;
  border-radius: 0.27vw;
  z-index: 0;
}
.custom-playlists-shadow{
  position: absolute;
  top: 3306px;
  right: -88px;
  width: 336px;
  height: 230px;
  padding: 2.2vw 1.1vw 1.8vw 1.6vw;
  border: 0.13vw solid #AEA7A5;
  border-radius: 0.27vw;
  z-index: 0;
}
.img-keeptrack{
  position: absolute;
  top: 3250px;
  right: 930px;
  z-index: 2;
}
.img-top3{
  position: absolute;
  top: 3250px;
  right: 470px;
  z-index: 2;
}
.img-customplaylists{
  position: absolute;
  top: 3250px;
  right: 0px;
  z-index: 2;
}
.txt-keeptrack{
  color: black;
  font-size: 24px;
  width: 150px;
  position: absolute;
  top: 3470px;
  right: 1060px;
  z-index: 2;
}
.subtext-keeptrack{
  color: grey;
  font-size: 17px;
  width: 350px;
  position: absolute;
  top: 3510px;
  right: 850px;
  z-index: 2;
  text-align: left;
}
.txt-top3{
  color: black;
  font-size: 24px;
  width: 150px;
  position: absolute;
  top: 3470px;
  right: 600px;
  z-index: 2;
}
.subtext-top3{
  color: grey;
  font-size: 17px;
  width: 350px;
  position: absolute;
  top: 3510px;
  right: 393px;
  z-index: 2;
  text-align: left;
}
.txt-customplaylists{
  color: black;
  font-size: 24px;
  width: 350px;
  position: absolute;
  top: 3470px;
  right: -10px;
  z-index: 2;
}
.subtext-customplaylists{
  color: grey;
  font-size: 17px;
  width: 350px;
  position: absolute;
  top: 3510px;
  right: -52px;
  z-index: 2;
  text-align: left;
}
.enteremail-box{
  position: absolute;
  top: 4600px;
  right: -40px;
  width: 1250px;
  height: 405px;
  border-radius: 0.27vw;
  background: linear-gradient(to right,#76DBC2,#6AC0CF);
  z-index: 1;
}
.img-entermail-box{
  position: absolute;
  top: 4490px;
  right: -60px;
  z-index: 1;
}
.txt-entermail-box{
  font-size: 52px;
  position: absolute;
  top: 4650px;
  right: 160px;
  width: 1000px;
  z-index: 1;
  text-align: left; 
}
.txtbox-entermail{
  text-align: left;
  width: 503px;
  height: 65px;
  position: absolute;
  top: 4850px;
  z-index: 1;
  right: 660px;
}
input{
  padding: 20px 21px 19px;
  border: none;
  width: 503px;
  height: 25px;
  border-radius: 0.27vw;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #49ac98;
  font-family: "Segoe UI";
  font-size: 24px;
  outline: none;
  margin: auto;
  display: block;
  z-index: 1;
}
input::-webkit-input-placeholder{
  color: #b0b0b0;
  z-index: 1;
}
button{
  border: none;
  position: absolute;
  top: 0px;
  right: -220px;
  width: 160px;
  height: 64px;
  border-radius: 0.27vw;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: "spoof";
  color: #F14F74;
  font-size: 24px;
  z-index: 1;
}
.infobox{
  position: absolute;
  top: 4950px;
  right: -380px;
  width: 2600px;
  height: 500px;
  background-color: #F68093;
  z-index: 0;
}
.bottom-links1{
  position: absolute;
  top: 5150px;
  right: 620px;
  font-size: 17px;
  font-family: "spoof";
  z-index: 1;
  line-height: 20px;
  text-align: left;
}
.bottom-links2{
  position: absolute;
  top: 5150px;
  right: 320px;
  font-size: 17px;
  font-family: "spoof";
  z-index: 1;
  line-height: 20px;
  text-align: left;
}
.bottom-links3{
  width: 300px;
  position: absolute;
  top: 5150px;
  right: -200px;
  font-size: 17px;
  font-family: "spoof";
  z-index: 1;
  line-height: 20px;
  text-align: left;
}
.zupe-bottom{
  position: absolute;
  top: 5150px;
  right: 1159px;
  font-size: 20px;
  font-family: "spoof";
  z-index: 1;
  line-height: 20px;
  text-align: left;
}
.copyright{
  position: absolute;
  width: 200px;
  top: 5265px;
  right: 1076px;
  font-size: 17px;
  font-family: "spoof";
}
a{
  color: #191716;
  text-decoration-line: none;
}
</style>
