import { Component} from '@angular/core';
import { NgZone  } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';
import {AddFriendPage} from '../add-friend/add-friend'
import {DataProvider} from '../../providers/data/data';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatMorsePage} from '../chatMorse/chatdb';
import {VibrationProvider} from '../../providers/vibration/vibration';
import {MorseProvider} from '../../providers/morse/morse'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numChat: number= -1; 
  filter = [];
  message = [];
  search: string ='';
  user: any;
  constructor(public navCtrl: NavController, private auth: DataProvider,public events: Events,private zone: NgZone,private afDB: AngularFireDatabase,private vibration: VibrationProvider, private traslate: MorseProvider) {
    this.GetMessage();
    this.user= this.auth.CurrentUser();
    this.afDB.list("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes").valueChanges().subscribe( res=>{
      this.zone.run(() => {
        this.GetMessage();
      });
    });


  }
  
  /**
   * this function get new message
   */

  ngOnChanges(){
    this.GetMessage();
  }

/**
 *  this function redirects to the profile page
 */

  goToPerfil(){
    this.navCtrl.push(ProfilePage);
  }
  
 /**
  *   this function redirects to the addFriend page
  */ 
  addFriend(){
    this.navCtrl.push(AddFriendPage);
  }

/**
 * this function redirects to a specific chat
 * @param id is the chat id
 * @param nombre  is the name of the chat user
 */

  goToChat(id,nombre){
    if(this.auth.CurrentUser().discapacidad.indexOf('Auditiva')>-1){
      this.navCtrl.push(ChatMorsePage,{uid: id, nombre: nombre});
    }
    else{
      this.navCtrl.push(ChatPage,{uid: id, nombre: nombre});
    }
  }

  /**
   *  this function takes the messages and updates the view
   */

  GetMessage(){
    var messageRef= firebase.database().ref("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes");
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.message=[];
      for( var key in data){
        this.message.push({ nombre: data[key]['nombre'], notification: data[key]['viewed'], uid: key, isSelect: false});
      }
      this.filter= this.message.sort(function(a,b){
        if(a.notification=='not-viewed' && b.notification=='viewed'){
          return -1;
        }
  
        if(a.notification=='viewed' && b.notification=='not-viewed'){
          return 1;
        }
        return 0;
      });
    })
    
    
  }

  /**
   *  this function returns filtered chats
   */

  FilteredItems(){
    return this.message.filter((item)=>{
      return item.nombre.toLowerCase().indexOf(this.search.toLowerCase())>-1;
    })
  }

  /**
   *  this function sort the messages
   */

  setFilteredItems(){
    this.filter= this.FilteredItems().sort(function(a,b){
      if(a.notification=='viewed' && b.notification=='not-viewed'){
        return -1;
      }

      if(a.notification=='not-viewed' && b.notification=='viewed'){
        return 1;
      }
      return 0;
    })
  }

  /**
   *  this function selects the messages descending
   */

  DownList(){
    if( this.numChat==-1){
      this.numChat+=1;
      this.filter[this.numChat].isSelect=true;
      this.vibration.beginVibrate();
      this.vibration.VibrateMessage(this.traslate.Traducir(this.filter[this.numChat].nombre)) ;
    }
    else if( this.numChat<this.filter.length-1){
      this.vibration.stopVibrate();
      this.numChat+=1;
      this.filter[this.numChat].isSelect=true;
      this.filter[this.numChat-1].isSelect=false;
      this.vibration.beginVibrate();
      this.vibration.VibrateMessage(this.traslate.Traducir(this.filter[this.numChat].nombre));
    }
  }

  /**
   * this function selects messages upwards
   */

  UpList(){
    if( this.numChat>=1 && this.numChat<this.filter.length){
      this.vibration.stopVibrate();
      this.numChat-=1;
      this.filter[this.numChat].isSelect=true;
      this.filter[this.numChat+1].isSelect=false;
      this.vibration.beginVibrate();
      this.vibration.VibrateMessage(this.traslate.Traducir(this.filter[this.numChat].nombre));
    }
  }

/**
 *  this function selects a specific message 
 */

  Enter(){
    this.goToChat(this.filter[this.numChat].uid,this.filter[this.numChat].nombre);
  }

}

