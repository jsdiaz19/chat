import { Component} from '@angular/core';
import { NgZone  } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChatPage } from '../Chats/chat/chat';
import { ProfilePage } from '../profile/profile';
import {AddFriendPage} from '../add-friend/add-friend'
import {DataProvider} from '../../providers/data/data';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatdbPage} from '../chatdb/chatdb';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  temparr = [];
  filter = [];
  message;
  search: string ='';
  myrequests;
  constructor(public navCtrl: NavController, private auth: DataProvider,public events: Events,private zone: NgZone,private afDB: AngularFireDatabase) {
    this.GetMessage();
    this.afDB.list("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes").valueChanges().subscribe( res=>{
      this.zone.run(() => {
        this.GetMessage();
      });
  });
  }
  

 
 

  ngOnChanges(){
    this.GetMessage();
  }

  goToLogin(){
    this.auth.logout();
  }
  
  goToPerfil(){
    this.navCtrl.push(ProfilePage);
  }
  
  goToChat(id,nombre){
    if(this.auth.CurrentUser().discapacidad.indexOf('Auditiva')>-1){
      this.navCtrl.push(ChatdbPage,{uid: id, nombre: nombre});
    }
    else{
      this.navCtrl.push(ChatPage,{uid: id, nombre: nombre});
    }
  }

  GetMessage(){
    var messageRef= firebase.database().ref("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes");
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.message=[];
      for( var key in data){
        this.message.push({ nombre: data[key]['nombre'], notification: data[key]['viewed'], uid: key});
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

  addFriend(){
    this.navCtrl.push(AddFriendPage);
  }

  FilteredItems(){
    return this.message.filter((item)=>{
      return item.nombre.toLowerCase().indexOf(this.search)>-1;
    })
  }

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


}

