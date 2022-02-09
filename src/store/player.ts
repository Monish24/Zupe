import { mutation, action } from 'vuex-class-component'
import { VuexModule } from './module';

export class playerStore extends VuexModule.With({ namespaced: 'player' }) {

    private _videoID = "";
    get videoID(){
        return this._videoID
    }
    set videoID(videoID:string){
        this._videoID = videoID
    }

    private _songINFO = '';
    get songINFO(){
        return this._songINFO
    }
    set songINFO(songINFO){
        this._songINFO=songINFO
    }

    private _queuenext = "";
    get queuenext(){
        return this._queuenext
    } 
    set queuenext(queuenext){
        this._queuenext=queuenext
    }

    private _uid = "";
    get uid(){
        return this._uid
    } 
    set uid(uid){
        this._uid=uid
    }

    private _umail = "";
    get umail(){
        return this._umail
    } 
    set umail(umail){
        this._umail=umail
    }

    private _upass = "";
    get upass(){
        return this._upass
    } 
    set upass(upass){
        this._upass=upass
    }
}