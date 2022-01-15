<template>
    <div></div>
</template>

<script lang="ts">
import Vue from "vue"


import { Component } from "vue-property-decorator";

@Component({
  
})

export default class callback extends Vue{
    mounted() {
    const code = this.$route.query.code
    console.log(code)
    try {
        fetch('http://localhost:3000/api/authcode', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: code
            })
        }).then(() =>{
            this.$router.push('/home')
        })
        } catch (e) {
        console.log(e)
}
  }
}

</script>