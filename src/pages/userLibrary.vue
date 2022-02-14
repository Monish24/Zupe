<template>
    <div>
        <div class="main-lib">
            <div class="options-for-lib">
                <div class="songs-lib" v-bind:style="{ background : bgColor1 }" @click="showSongsbtn">
                    Songs
                </div>
                <div class="songs-lib" v-bind:style="{ background : bgColor2 }" @click="showArtistsbtn">
                    Artists
                </div>
                <div class="songs-lib" v-bind:style="{ background : bgColor3 }" @click="showAlbumsbtn">
                    Albums
                </div>
            </div>
            <div class="library-container">
                <div class="lib-title">
                    <span v-if="showSongs">Songs - {{libsongslist.length}}</span><span v-if="showArtists">Artists - {{libartistslist.length}}</span><span v-if="showAlbums">Albums - {{libsongslist.length}}</span><span v-if="showArtistSongs" class="flexx"><img class="artimg" width="250vw" :src="this.artimgurl" alt=""> <div class="artimgsub">{{this.artname}}</div></span><span v-if="showAlbumSongs" class="flexx"><img class="albmimg" width="250vw" :src="this.albmimg" alt=""> <div class="albumimgsub">{{this.albmname}} <br> <div class="subsub">{{this.albmart}}</div></div></span>
                </div>
                <div class="songs-content-box" v-if="showSongs">
                    <div class="songcard-lib" v-for="res in libsongslist" :key="res.key">
                        <div class="img-songcard">
                            <img class="imgs" :src="res.songimgurl" width="60vw" alt="">
                        </div>
                        <div class="txt-sgcard">
                            {{res.songname}} <br>
                            <span class="stext">{{res.songartist}}</span>
                        </div>
                        <div class="duration">
                            {{res.songdur}}
                        </div>
                        <div class="threedots">
                            •••
                        </div>
                    </div>
                </div>
                <div class="artists-content-box" v-if="showArtists">
                    <div class="artistcard-lib" v-for="res in libartistslist" :key="res.key" @click="openartSongs(res.artistid,res.artistimgurl,res.artistname)">
                        <div>
                            <img class="artistlib-img" :src="res.artistimgurl" width="200vw" alt="">
                        </div>
                        <div class="txt-art-lib">
                            {{res.artistname}}
                        </div>
                    </div>
                </div>
                <div class="artists-content-box" v-if="showAlbums">
                    <div class="artistcard-lib" v-for="res in libalbumslist" :key="res.key" @click="openalbmSongs(res.albumid,res.artistname,res.albumname,res.albumimgurl)">
                        <div>
                            <img class="albumlib-img" :src="res.albumimgurl" width="200vw" alt="">
                        </div>
                        <div class="txt-art-lib">
                            {{res.albumname}} <br>
                            <span class="st"> {{res.artistname}} </span>
                        </div>
                    </div>
                </div>
                <div class="songs-content-box1" v-if="showArtistSongs">
                    <div class="songcard-lib" v-for="res in libartsongslist" :key="res.key">
                        <div class="img-songcard">
                            <img class="imgs" :src="res.songimgurl" width="60vw" alt="">
                        </div>
                        <div class="txt-sgcard">
                            {{res.songname}} <br>
                            <span class="stext">{{res.songartist}}</span>
                        </div>
                        <div class="duration">
                            {{res.songdur}}
                        </div>
                        <div class="threedots">
                            •••
                        </div>
                    </div>
                </div>
                <div class="songs-content-box1" v-if="showAlbumSongs">
                    <div class="songcard-lib" v-for="res in libalbumsongslist" :key="res.key">
                        <div class="img-songcard">
                            <img class="imgs" :src="res.songimgurl" width="60vw" alt="">
                        </div>
                        <div class="txt-sgcard">
                            {{res.songname}} <br>
                            <span class="stext">{{res.songartist}}</span>
                        </div>
                        <div class="duration">
                            {{res.songdur}}
                        </div>
                        <div class="threedots">
                            •••
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { vxm } from "@/store";


import { Component } from "vue-property-decorator";

@Component({
  layout: "contentarea"
})

export default class playlistdisplay extends Vue{
    private showAlbumSongs=false
    private showArtistSongs=false
    private showSongs=true
    private showArtists=false
    private showAlbums=false
    private resultsongslibrary:any=[]
    private resultsongslibrary2:any=[]
    private resultartistslibrary:any=[]
    private resultartistslibrary2:any=[]
    private resultalbumslibrary:any=[]
    private resultalbumslibrary2:any=[]
    private resultartistssongslibrary:any=[]
    private resultartistssongslibrary2:any=[]
    private resultalbumssongslibrary:any=[]
    private resultalbumssongslibrary2:any=[]
    private libsongs:any=[]
    private libsongslist:any=[]
    private libartsongs:any=[]
    private libartsongslist:any=[]
    private libalbumsongs:any=[]
    private libalbumsongslist:any=[]
    private libartists:any=[]
    private libartistslist:any=[]
    private libalbumsts:any=[]
    private libalbumslist:any=[]
    private bgColor1:string='#2e2a3a'
    private bgColor2:string='#25212e'
    private bgColor3:string='#25212e'
    private artimgurl =''
    private artname = ''
    private albmname = ''
    private albmart = ''
    private albmimg = ''
    private showSongsbtn(){
        this.showAlbumSongs=false
        this.showArtistSongs=false
        this.showSongs=true
        this.showArtists=false
        this.showAlbums=false
        if(this.showSongs){
            this.bgColor1='#2e2a3a'
        }
        else{
            this.bgColor1='#25212e'
        }
        if(this.showArtists){
            this.bgColor2='#2e2a3a'
        }
        else{
            this.bgColor2='#25212e'
        }
        if(this.showAlbums){
            this.bgColor3='#2e2a3a'
        }
        else{
            this.bgColor3='#25212e'
        }
    }
    private async openartSongs(artistiid:string,artimg:string,aname:string){
        this.showAlbumSongs=false
        this.showArtistSongs=true
        this.showArtists=false
        this.libartsongslist=[]
        this.libartsongs=[]
        this.artimgurl=artimg
        this.artname=aname
        try {
            const tmp = await fetch('http://localhost:3000/lib/getlibartsongs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                artistid: artistiid
            })
            })

            this.resultartistssongslibrary = await tmp.json()
            } catch (e) {
            console.log(e)
        }

        for (let i = 0; i < this.resultartistssongslibrary.length; i++){
        this.libartsongs = this.resultartistssongslibrary[i]
        try {
        const tmp = await fetch('http://localhost:3000/api/getsongid2', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                song_id: this.libartsongs
            })
        })

        this.resultartistssongslibrary2 = await tmp.json()
        console.log(this.resultartistssongslibrary2)

        } catch (e) {
        console.log(e)
        }
        this.libartsongslist.push({'songname': this.resultartistssongslibrary2.name, 'songartist': this.resultartistssongslibrary2.artists[0].name, 'songalbumname': this.resultartistssongslibrary2.album.name,'songimgurl': this.resultartistssongslibrary2.album.images[0].url, 'songid': this.resultsongslibrary2.id, 'songdur': this.getTime(this.resultsongslibrary2.duration_ms)})
    }
    console.log(this.libartsongslist)
    }
    private async openalbmSongs(albumid:string,artistname:string,albumname:string,albumimg:string){
        this.albmname = albumname
        this.albmart = artistname
        this.albmimg = albumimg
        this.showAlbumSongs=true
        this.showAlbums=false
        this.libalbumsongs=[]
        this.libalbumsongslist=[]
        console.log(albumid)
        try {
            const tmp = await fetch('http://localhost:3000/lib/getlibalbmsongs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                albumid: albumid
            })
            })

            this.resultalbumssongslibrary = await tmp.json()
            } catch (e) {
            console.log(e)
        }

        for (let i = 0; i < this.resultalbumssongslibrary.length; i++){
        this.libalbumsongs = this.resultalbumssongslibrary[i]
        try {
        const tmp = await fetch('http://localhost:3000/api/getsongid2', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                song_id: this.libalbumsongs
            })
        })

        this.resultalbumssongslibrary2 = await tmp.json()
        console.log(this.resultalbumssongslibrary2)

        } catch (e) {
        console.log(e)
        }
        this.libalbumsongslist.push({'songname': this.resultalbumssongslibrary2.name, 'songartist': this.resultalbumssongslibrary2.artists[0].name, 'songalbumname': this.resultalbumssongslibrary2.album.name,'songimgurl': this.resultalbumssongslibrary2.album.images[0].url, 'songid': this.resultalbumssongslibrary2.id, 'songdur': this.getTime(this.resultalbumssongslibrary2.duration_ms)})
    }
    console.log(this.libalbumsongslist)
    }
    
    private showArtistsbtn(){
        this.showAlbumSongs=false
        this.showArtistSongs=false
        this.showSongs=false
        this.showArtists=true
        this.showAlbums=false
        if(this.showSongs){
            this.bgColor1='#2e2a3a'
        }
        else{
            this.bgColor1='#25212e'
        }
        if(this.showArtists){
            this.bgColor2='#2e2a3a'
        }
        else{
            this.bgColor2='#25212e'
        }
        if(this.showAlbums){
            this.bgColor3='#2e2a3a'
        }
        else{
            this.bgColor3='#25212e'
        }
    }
    private showAlbumsbtn(){
        this.showAlbumSongs=false
        this.showArtistSongs=false
        this.showSongs=false
        this.showArtists=false
        this.showAlbums=true
        if(this.showSongs){
            this.bgColor1='#2e2a3a'
        }
        else{
            this.bgColor1='#25212e'
        }
        if(this.showArtists){
            this.bgColor2='#2e2a3a'
        }
        else{
            this.bgColor2='#25212e'
        }
        if(this.showAlbums){
            this.bgColor3='#2e2a3a'
        }
        else{
            this.bgColor3='#25212e'
        }
    }
    private getTime(n: number) {
  const tmp = new Date(n).toISOString().substr(11, 8)

  if (tmp[0] == '0' && tmp[1] == '0') {
    return tmp.substr(3)
  }

  return tmp
}
    private onlyUnique(value:any, index:any, self:any) {
  return self.indexOf(value) === index;
}
  async created(){
      try {
            const tmp = await fetch('http://localhost:3000/lib/libsongssend', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resultsongslibrary = await tmp.json()
            // console.log(this.resultsongslibrary)

        } catch (e) {
            console.log(e)
        }
        for (let i = 0; i < this.resultsongslibrary.length; i++){
        this.libsongs = this.resultsongslibrary[i].song_id
        try {
        const tmp = await fetch('http://localhost:3000/api/getsongid2', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                song_id: this.libsongs
            })
        })

        this.resultsongslibrary2 = await tmp.json()
        console.log(this.resultsongslibrary2)

        } catch (e) {
        console.log(e)
        }
        this.libsongslist.push({'songname': this.resultsongslibrary2.name, 'songartist': this.resultsongslibrary2.artists[0].name, 'songalbumname': this.resultsongslibrary2.album.name,'songimgurl': this.resultsongslibrary2.album.images[0].url, 'songid': this.resultsongslibrary2.id, 'songdur': this.getTime(this.resultsongslibrary2.duration_ms)})
    }
    console.log(this.libsongslist)

    try {
            const tmp = await fetch('http://localhost:3000/lib/libartistssend', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resultartistslibrary = await tmp.json()
            console.log(this.resultartistslibrary.filter(this.onlyUnique)

            )} catch (e) {
            console.log(e)
        }
        for (let i = 0; i < this.resultartistslibrary.length; i++){
        this.libartists = this.resultartistslibrary[i]
        console.log(this.libartists)
        try {
        const tmp = await fetch('http://localhost:3000/api/getartistid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                artist_id: this.libartists
            })
        })

        this.resultartistslibrary2 = await tmp.json()
        console.log(this.resultartistslibrary2)

        } catch (e) {
        console.log(e)
        }
        this.libartistslist.push({'artistname': this.resultartistslibrary2.name, 'artistid': this.resultartistslibrary2.id,'artistimgurl': this.resultartistslibrary2.images[0].url})
    }
    
    console.log(this.libartistslist)

    try {
            const tmp = await fetch('http://localhost:3000/lib/libalbumssend', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })

            this.resultalbumslibrary = await tmp.json()
            console.log(this.resultalbumslibrary)

            } catch (e) {
            console.log(e)
        }
        for (let i = 0; i < this.resultalbumslibrary.length; i++){
        this.libalbumsts = this.resultalbumslibrary[i]
        console.log(this.libalbumsts)
        try {
        const tmp = await fetch('http://localhost:3000/api/getalbumid', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                album_id: this.libalbumsts
            })
        })

        this.resultalbumslibrary2 = await tmp.json()
        console.log(this.resultalbumslibrary2)

        } catch (e) {
        console.log(e)
        }
        this.libalbumslist.push({'artistname': this.resultalbumslibrary2.artists[0].name, 'albumname': this.resultalbumslibrary2.name,'albumimgurl': this.resultalbumslibrary2.images[0].url, 'albumid': this.resultalbumslibrary2.id})
    }
    
    console.log(this.libalbumslist)
}}

</script>

<style>

.main-lib{
    font-family: "spoof";
    margin-left: 1.55vw !important;
    width: 96.9vw;
    height: 90.85vh;
}

.options-for-lib{
    display: flex;
    background-color: #25212e;
    height: 5vh;
}

.songs-lib{
    padding-top: 0.5vw;
    font-size: 1vw;
    color: #ffeea9;
    text-align: center;
    width: 32.3vw;
    transition: 0.1s linear;
}

.library-container{
    color: white;
    font-size: 1.2vw;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 5vw;
    margin-left: 0vw !important;
    width: 96.9vw;
    height: 85.85vh;
}

.lib-title{
    padding-left: 1vw;
    padding-bottom: 0.5vw !important;
    border-bottom: 1px rgba(161, 161, 161, 0.274) solid;
}

.songs-content-box{
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-top: 1vw !important;
    height: 69.9vh;
}

.songs-content-box1{
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin-top: 1vw !important;
    height: 39.6vh;
}

.songcard-lib{
    font-size: 16px;
    display: flex;
    flex-direction: row;
}

.txt-sgcard{
    padding-top: 0.6vw;
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin-left: 1vw !important;
}

.stext{
    color: grey;
    font-size: 14px;
}

.duration{
    padding-top: 1vw;
    width: 17vw;
}

.threedots{
    padding-top: 1vw;
}

.imgs{
    border-radius: 3px;
}

.artists-content-box{
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 1vw !important;
}

.artistcard-lib{
    background: #25212e60;
    border-radius: 5px;
    /* border: 1px white solid; */
    width: 12vw;
    height: 29vh;
    /* padding-top: 0.5vw;
    padding-left: 0.8vw; */
}

.artistlib-img{
    margin-top: 0.5vw !important;
    margin-left: 0.8vw !important;
    border-radius: 50%;
}

.txt-art-lib{
    font-size: 16px;
    text-align: center;
}

.st{
    color: grey;
    font-size: 13px;
}

.albumlib-img{
    margin-top: 0.8vw !important;
    margin-left: 0.8vw !important;
    border-radius: 2px;
}

.artimg{
    border-radius: 50%;
    margin-bottom: 4vw !important;
}
.flexx{
    display: flex;
}
.artimgsub{
    font-size: 50px;
    margin-left: 2vw !important;
    margin-top: 5vw !important;
}

.albmimg{
    border-radius: 6px;
    margin-bottom: 4vw !important;
}

.albumimgsub{
    font-size: 50px;
    margin-left: 2vw !important;
    margin-top: 3.5vw !important;
}

.subsub{
    font-size: 40px;
    color: grey;
}
</style>