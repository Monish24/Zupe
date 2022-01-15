<template>
    <div>
            <div class="first_name">
                Full Name: <input v-model="uname"   id="firstName"> 
            </div>
            <div class="dob">
                DateOfBirth: <input type="date" id="birthday" v-model="birthday">
            </div>
            <div class="gender">
                Gender: <br>
                <input type="radio" id="gender" value="male">Male <br>
                <input type="radio" id="gender" value="female">Female <br>
                <input type="radio" id="gender" value="nonbinary"> Non-binary
            </div>
            <div class="email">
                E-mail: <input type="email" id="email" v-model="uemail"><br>
                confirm email: <input type="email" id="confirmemail" v-model="uemailcnfrm">
            </div>
            <div class="password">
                Password: <input type="password" id="pass" v-model="upassword"><br>
                confirm password: <input type="password" id="pass" v-model="upasswordcnfrm">
            </div>
            <button @click="submitAction"> Next </button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";



@Component({
  name: "App",
})
export default class SignUp extends Vue {
    private uname = ""
    private lname = ""
    private birthday = ""
    private gender = "Male"
    private uemail = ""
    private upassword = ""

    private async submitAction() {
    // try {
    //     await fetch('http://localhost:3000/auth/signup', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             username: this.uname,
    //             password: this.upassword,
    //             user_email: this.uemail,
    //             birthday: this.birthday,
    //             gender: this.gender,
    //         })
    //     })
    //     } catch (e) {
    //     console.log(e)
    //     }

    //     // nodejs connection here at top
    //     this.uname = ""
    //     this.lname = ""
    //     this.birthday = ""
    //     this.gender= ""
    //     this.uemail = ""
    //     console.log(this.uname)
    //     console.log(this.lname)
    // }
    this.$router.push('/genreselect')
}}
  
</script>

<style>
input{
    color: #000;
}

body{
  background: linear-gradient(to bottom, #D6E1ED, #DEE0F1);
}
</style>