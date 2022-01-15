<template>
    <div>
        <div class="uname">
             User Name: <input v-model="username" type="text" id="uname">
        </div>
        <div class="password">
            Password: <input v-model="password" type="password" id="pass">            
        </div> 
        <div class="submitBtn">
            <button @click="submitAction">Submit</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class Login extends Vue {
    private username = ""
    private password = ""

    private async submitAction() {
    // try {
    //     await fetch('http://localhost:3000/auth/login', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             username: this.username,
    //             password: this.password
    //         })
    //     })
    //     } catch (e) {
    //     console.log(e)
    //     }
    //     this.username=""
    //     this.password=""
        this.$router.push('/dashboard')
    }
}

</script>

<style>

.uname{
    font-size: 20px;
}
</style>