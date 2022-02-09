<template>
    <div class="messaging-container" :style="{transform: `translateX(${open2?'250':'0'}px)`}">
            <div class="sidebar2">
                <input class="toggleOpencb2" @click="toggleOpen2" v-model="sidebar2cb" type="checkbox">
                <input type="text" v-model="openclose2" placeholder="Open" class="toggleOpen2">
            </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
})
export default class sidebar2 extends Vue {
    private open2=true
    private openclose2=""
    private sidebar2cb=""
    private toggleOpen2(){
        this.open2=!this.open2
        if (this.sidebar2cb != "") {
            this.openclose2="Open"
        }
        else{
            this.openclose2="Close"
        }
    }
}
</script>
<style>

.messaging-container{
    background: #221f2b;
    position: fixed;
    width: 250px;
    height: 879px;
    top: 0px;
    right: 0px;
    z-index: 3;
    transition: transform 600ms ease-in-out;
}

.sidebar2{
    background: #1c1924;
    width: 30px;
    height: 920px;
    position: fixed;
    top: 0px;
    right: 250px;
}

.toggleOpen2{
    transition: transform 0.3s;
    font-weight:lighter;
    font-family: "spoof";
    color: #ffeea9;
    font-size: 20px;
    -webkit-appearance: none;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    pointer-events: none; 
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: fixed;
    top: 325px;
    right: 133px;
    z-index: 1;
}

.toggleOpen2::placeholder{
    font-family: "spoof";
    color: #ffeea9;
    font-size: 20px;
}

.toggleOpencb2{   
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 10px;
    position: fixed;
    top: 415px;
    right: 250px;
    width: 26px;
    height: 53.97px;
    z-index: 2;
	padding: 0;
    transition: 00.3s;
}

</style>
