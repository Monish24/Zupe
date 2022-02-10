<template>
    <div class="bg">
        <div class="content-container">
            <div class="inputboxes-container">
                <div class="welcome-text">
                    Welcome.
                </div>
                <div class="eml-container">
                    <label class="title">
                        Email-id
                    </label>
                    <input class="inp" v-model="uemail" type="text" placeholder="Your email-id">
                </div>
                <div class="upass-container">
                    <label class="title">
                        Password
                    </label>
                    <input class="inp" v-model="upass" type="password" placeholder="Your password">
                </div>
                <div class="forgot-pass">
                    Forgot your password?
                </div>
                <router-link style="text-decoration: none; color: inherit;" to='/login'>
                <button @click="submitAction" class="sign-in-btn">Sign in</button>
                </router-link>
                <div class="sgninbtn-shadow"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { vxm } from "@/store";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class Login extends Vue {
    private uemail = ""
    private upass = ""
    private uid = ""
    private test = ""
    private async submitAction() {
    try {
        const tmp = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: this.uemail,
                password: this.upass
            })
        })

        this.uid = await tmp.json()
        } catch (e) {
        console.log(e)
        }
        this.uemail=""
        this.upass=""
        vxm.playerStore.uid = this.uid
        console.log(vxm.playerStore.uid)
        this.$router.push('/dashboard')
    }
}

</script>

<style>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

.bg{
    background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}
.content-container{
    background-color: white;
    width: 680px;
    height: 100vh;
    margin: 0px auto !important;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.inputboxes-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 380px;
    height: 493px;
}

.welcome-text{
    text-align: center;
    font-family: "spoof";
    font-size: 48px;
    width: 377px;
    height: 60px;
}

.title{
    font-size: 14px;
    font-family: "spoof";
    padding-bottom: 10px;
    padding-left: 2px;
}

.eml-container{
    width: 377px;
    height: 84px;
}

.upass-container{
    width: 377px;
    height: 84px;
}

.inp{
    padding-left: 10px;
    width: 370px;
    height: 48px;
    border-radius: 4px;
    border: none;
  border-radius: 0.27vw;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: rgb(230, 230, 230);
  font-family: "Segoe UI";
  font-size: 24px;
  outline: none;
  margin: auto;
  display: block;
  z-index: 1;
}

.inp::placeholder{
    opacity: 0.6;
    color: grey;
    font-size: 20px;
    font-family: "spoof";
}

.forgot-pass{
    font-family: "spoof";
    color: rgb(124, 124, 124);
    position: relative;
    top: -20px;
}

.sign-in-btn{
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
    width: 373px;
    height: 49px;
    outline: none;
    z-index: 1;
    transition: 0.1s linear;
}

.sign-in-btn:hover{
    top: 2px;
    left: 4px;
}

.sgninbtn-shadow{
    border-radius: 3px;
    border: 2px rgb(29, 29, 29) solid;
    width: 369px;
    height: 47px;
    position: relative;
    top: -76px;
    left: 4px;
}
</style>