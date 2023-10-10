<template>
    <div>
    <div class="bg">
        <div class="signup-info-container">
            <div class="inputboxes-container">
                <div class="create-text">
                    CREATE ACCOUNT
                </div>
                <div class="fn-container">
                    <div class="title">
                        FIRST NAME
                    </div>
                    <input v-bind:style="{ color : textColor1, background : bgColor1, border : borderColor1  }" class="inp" v-model="fname" type="text" placeholder="Your FIRST NAME">
                    <div class="error-text">
                        <span v-for="error in fnameerrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div class="ln-container">
                    <div class="title">
                        Last name
                    </div>
                    <input v-bind:style="{ color : textColor2, background : bgColor2, border : borderColor2  }" class="inp" v-model="lname" type="text" placeholder="Your last name">
                    <div v-if="lnameerrors" class="error-text">
                        <span v-for="error in lnameerrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div class="dob-container">
                     <div class="title">
                        Date of birth
                    </div>
                    <input v-bind:style="{ color : textColor3, background : bgColor3, border : borderColor3  }" class="inp" v-model="birthday" type="date" placeholder="Your date of birth">
                    <div v-if="doberrors" class="error-text">
                        <span v-for="error in doberrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div class="gen-container">
                     <div class="title">
                        Gender
                    </div>
                    <select v-bind:style="{ color : textColor4, background : bgColor4, border : borderColor4 }" class="inp" v-model="gender" type="text" placeholder="Your gender">
                        <option disabled value="">Please select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                    <div v-if="gendererrors" class="error-text">
                        <span v-for="error in gendererrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div class="eml-container">
                     <div class="title">
                        E-mail
                    </div>
                    <input v-bind:style="{ color : textColor5, background : bgColor5, border : borderColor5  }" class="inp" v-model="uemail" type="text" placeholder="Your Email">
                    <div v-if="emailerrors" class="error-text">
                        <span v-for="error in emailerrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div class="pss-container">
                     <div class="title">
                        Password
                    </div>
                    <input v-bind:style="{ color : textColor6, background : bgColor6, border : borderColor6  }" class="inp" v-model="upassword" type="text" placeholder="At least 8 letters and 1 number">
                    <div v-if="passerrors" class="error-text">
                        <span v-for="error in passerrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div class="pss-confirm-container">
                     <div class="title">
                        Confirm password
                    </div>
                    <input v-bind:style="{ color : textColor7, background : bgColor7, border : borderColor7  }" class="inp" v-model="cnfrmupass" type="password" placeholder="Your password again">
                    <div v-if="confirmpasserrors.length" class="error-text">
                        <span v-for="error in confirmpasserrors" :key="error">
                            {{ error }}
                        </span>
                    </div>
                </div>
                <div>
                    <button class="create-btn" @click="submitAction">CREATE ACCOUNT</button>
                    <div class="cbtn-shadow"></div>
                </div>
            </div>
        </div>
        <transition name="fade">
        <div v-show="showOTPbox" class="email-verification">
            <div class="otp-box">
                <div class="otp-sent-text">
                     Enter 6-digit OTP Sent to your Email-id
                </div>
                <input v-model="otpinput" type="number" class="inp2" placeholder="Enter OTP Here">
                <div v-if="InvalidOTP" class="err-txt">Invalid OTP</div>
                <div class="otp-btn" @click="sendOTPagain">
                    Resend OTP
                </div>
                <div class="otp-btn2" @click="verifyOTP">
                    Submit
                </div>
                <div @click="hideOTPbox" class="close-otp-box">
                    <img src="@/assets/img/closeicon.png" height="24px" width="24px" alt="">
                </div>
            </div>
        </div>
        </transition>
    </div>
    </div>
</template>

<script lang="ts">
import { vxm } from "@/store";
import { Component, Vue } from "vue-property-decorator";



@Component({
  name: "App",
})
export default class SignUp extends Vue {
    private fname = ""
    private lname = ""
    private birthday = ""
    private gender = ""
    private uemail = ""
    private upassword = ""
    private fullname = ""
    private cnfrmupass= ""
    
    private fnameerrors: string[] = []
    private lnameerrors: string[] = []
    private doberrors: string[] = []
    private gendererrors: string[] = []
    private emailerrors: string[] = []
    private passerrors: string[] = []
    private confirmpasserrors: string[] = []
    private textColor1=""
    private bgColor1=""
    private borderColor1=""
    private textColor2=""
    private bgColor2=""
    private borderColor2=""
    private textColor3=""
    private bgColor3=""
    private borderColor3=""
    private textColor4=""
    private bgColor4=""
    private borderColor4=""
    private textColor5=""
    private bgColor5=""
    private borderColor5=""
    private textColor6=""
    private bgColor6=""
    private borderColor6=""
    private textColor7=""
    private bgColor7=""
    private borderColor7=""
    private uid=""
    private otpinput:number=0
    private check=""
    private showOTPbox=false
    private InvalidOTP=false

    private async submitAction() {
        console.log(this.gender)
        this.textColor1="black"
        this.bgColor1="rgb(230, 230, 230)"
        this.borderColor1="none"
        this.textColor2="black"
        this.bgColor2="rgb(230, 230, 230)"
        this.borderColor2="none"
        this.textColor3="black"
        this.bgColor3="rgb(230, 230, 230)"
        this.borderColor3="none"
        this.textColor4="black"
        this.bgColor4="rgb(230, 230, 230)"
        this.borderColor4="none"
        this.textColor5="black"
        this.bgColor5="rgb(230, 230, 230)"
        this.borderColor5="none"
        this.textColor6="black"
        this.bgColor6="rgb(230, 230, 230)"
        this.borderColor6="none"
        this.textColor7="black"
        this.bgColor7="rgb(230, 230, 230)"
        this.borderColor7="none"
        this.fnameerrors = []
        this.lnameerrors = []
        this.doberrors = []
        this.emailerrors = []
        this.gendererrors = []
        this.passerrors = []
        this.confirmpasserrors = []
        
        if (!this.fname){
            this.fnameerrors.push("Shouldn't be blank");
            this.textColor1="#f57972"
            this.bgColor1="#fbdfd3"
            this.borderColor1="2px solid #f66025"
        }
        if (!/^[a-zA-Z\s]*$/.test(this.fname)) {
            this.fnameerrors.push("Cannot have numbers")
            this.fname=""
            this.textColor1="#f57972"
            this.bgColor1="#fbdfd3"
            this.borderColor1="2px solid #f66025"
        }
        if (!this.lname){
            this.lnameerrors.push("Shouldn't be blank");
            this.textColor2="#f57972"
            this.bgColor2="#fbdfd3"
            this.borderColor2="2px solid #f66025"
        }
        if (!/^[a-zA-Z\s]*$/.test(this.lname)) {
            this.lnameerrors.push("Cannot have numbers")
            this.lname=""
            this.textColor2="#f57972"
            this.bgColor2="#fbdfd3"
            this.borderColor2="2px solid #f66025"
        }
        if (!this.birthday){
            this.doberrors.push("Shouldn't be blank");
            this.textColor3="#f57972"
            this.bgColor3="#fbdfd3"
            this.borderColor3="2px solid #f66025"
        }
        if (!this.uemail) {
            this.emailerrors.push("Shouldn't be blank");
            this.textColor5="#f57972"
            this.bgColor5="#fbdfd3"
            this.borderColor5="2px solid #f66025"
        }
        if (this.uemail && !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(this.uemail)) {
            this.emailerrors.push("Invalid Email-id")
            this.uemail=""
            this.textColor5="#f57972"
            this.bgColor5="#fbdfd3"
            this.borderColor5="2px solid #f66025"
        }
        if (!this.gender){
            this.gendererrors.push("Shouldn't be blank");
            this.textColor4="#f57972"
            this.bgColor4="#fbdfd3"
            this.borderColor4="2px solid #f66025"
        }
        if (!this.upassword){
            this.passerrors.push("Shouldn't be blank");
            this.textColor6="#f57972"
            this.bgColor6="#fbdfd3"
            this.borderColor6="2px solid #f66025"
        }
        if (this.upassword && !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.upassword)) {
            this.passerrors.push("Please Enter at least 8 letters and 1 number")
            this.upassword=""
            this.textColor6="#f57972"
            this.bgColor6="#fbdfd3"
            this.borderColor6="2px solid #f66025"
        }
        if (!this.cnfrmupass){
            this.confirmpasserrors.push("Shouldn't be blank");
            this.textColor7="#f57972"
            this.bgColor7="#fbdfd3"
            this.borderColor7="2px solid #f66025"
        }
        if (this.cnfrmupass && this.cnfrmupass != this.upassword){
            this.confirmpasserrors.push("Password does not match")
            this.cnfrmupass=""
            this.textColor7="#f57972"
            this.bgColor7="#fbdfd3"
            this.borderColor7="2px solid #f66025"
        }
    this.fullname= this.fname + " " + this.lname
    if (this.fname && this.lname && this.birthday && this.uemail && this.upassword && this.cnfrmupass) {
          this.showOTPbox=true
          fetch('http://localhost:3000/otpmanage/senduid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uemail : this.uemail,
                uid: this.uid
            })
        })      
    }
    }
    private hideOTPbox(){
        this.showOTPbox=false
    }
    private sendOTPagain(){
        this.InvalidOTP=false
        this.otpinput=0
        fetch('http://localhost:3000/otpmanage/senduid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                uemail : this.uemail,
                uid: this.uid
            })
        })
    }
    private async verifyOTP(){
        fetch('http://localhost:3000/otpmanage/sendotp', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                otpinput: this.otpinput
            })
        })
        try {
            const tmp = await fetch('http://localhost:3000/otpmanage/verifyotp', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.check = await tmp.json()
            console.log(this.check)
        } catch (e) {
            console.log(e)
        }
        if(this.check==="valid"){
            this.InvalidOTP=false
            try {
        await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullname: this.fullname,
                password: this.upassword,
                user_email: this.uemail,
                birthday: this.birthday,
                gender: this.gender,
            })
        })
        } catch (e) {
        console.log(e)
        }
        vxm.playerStore.umail=this.uemail
        vxm.playerStore.upass=this.upassword
        this.fname = ""
        this.lname = ""
        this.birthday = ""
        this.gender= ""
        this.uemail = ""
        this.upassword = ""
        this.cnfrmupass = ""
        console.log(this.fullname)
        this.$router.push('/genreselect')
        }
        else{
            this.InvalidOTP=true
        }
    }
}
  
</script>

<style scoped>
@font-face {
  font-family: "spoof";
  src: url("../assets/Spoof-Regular.ttf");
  font-weight: 200;
}

input{
    color: #000;
}

.bg{
    font-family: "spoof";
    background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
    z-index: 1;
    display: flex;
    @media screen and (0px <= width <= 1520px){
        background-color: black;
    }
}

.signup-info-container{
    margin: 0px auto !important;
    display: flex;
    overflow: auto;
    background: white;
    width: 680px;
    height: 979px;
}

.inputboxes-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    top: 30px;
    left: 150px;
    width: 380px;
    height: 929px;
}

.create-text{
    font-family: "spoof";
    font-size: 48px;
    width: 377px;
    height: 60px;
}

.fn-container{
    width: 377px;
    height: 84px;
}

.ln-container{
    width: 377px;
    height: 84px;
}

.dob-container{
    width: 377px;
    height: 84px;
}

.gen-container{
    width: 377px;
    height: 84px;
}

.eml-container{
    width: 377px;
    height: 84px;
}

.pss-container{
    width: 377px;
    height: 84px;
}

.pss-confirm-container{
    width: 377px;
    height: 84px;
}

.title{
    font-size: 14px;
    font-family: "spoof";
    padding-bottom: 7px;
    padding-left: 2px;
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

.create-btn{
    padding-bottom: 5px;
    color: white;
    width: 373px;
    height: 49px;
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
  position: relative;
  top: 20px;
  z-index: 1;
  transition: 0.1s linear;
}

.create-btn:hover{
    left: 4px;
    top: 24px;
}

.cbtn-shadow{
    border-radius: 4px;
    position: relative;
    top: -26px;
    left: 6px;
    border: 2px rgb(29, 29, 29) solid;
    width: 369px;
    height: 47px;
    z-index: 0;
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

.error-text{
    font-family: "spoof";
    color: #f57972;
}

.email-verification{
    position: relative;
    top: -969px;
    width: 1920px;
    height: 969px;
    background: rgba(128, 128, 128, 0.466);
    z-index: 10;
    backdrop-filter: blur(3px);
}

.otp-box{
    border: 1px rgba(128, 128, 128, 0.61) solid;
    position: relative;
    top: 340px;
    left: 655px;
    border-radius: 8px;
    background: white;
    width: 500px;
    height: 270px;
}

.otp-sent-text{
    position: relative;
    font-size: 20px;
    top: 50px;
    text-align: center;
}

.inp2{
    position: relative;
    top: 80px;
    left: 70px;
    padding-left: 10px;
    width: 347px;
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

.inp2::placeholder{
    opacity: 0.6;
    color: grey;
    font-size: 20px;
    font-family: "spoof";
}

.otp-btn{
    color: white;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    position: relative;
    top: 100px;
    left: 70px;
    border-radius: 4px;
    width: 160px;
    height: 50px;
    background: rgb(29, 29, 29);
}

.otp-btn2{
    color: white;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    position: relative;
    top: 100px;
    left: 110px;
    border-radius: 4px;
    width: 160px;
    height: 50px;
    background: rgb(29, 29, 29);
}

.close-otp-box{
    width: 24px;
    height: 24px;
    position: relative;
    top: -120px;
    left: 469px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s linear;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.err-txt{
    position: relative;
    left: 80px;
    top: 85px;
    color: #f57972;
}
</style>
