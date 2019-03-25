import { Component} from '@angular/core';
import { NgZone  } from '@angular/core';
import { Events } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChatPage } from '../Chats/chat/chat';
import { ProfilePage } from '../profile/profile';
import {BdProvider} from '../../providers/bd/bd';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  message;
  constructor(public navCtrl: NavController, private auth: BdProvider,public events: Events,
    private zone: NgZone) {
    this.GetMessage();
    this.events.subscribe('updateScreen', () => {
      this.zone.run(() => {
        console.log('force update the screen');
      });
    });
  }
  
  ngOnChanges(){
    this.GetMessage();
  }

  goToLogin(){
    this.auth.logout();
    this.navCtrl.push(LoginPage);
  }
  
  goToPerfil(){
    this.navCtrl.push(ProfilePage);
  }
  
  goToChat(){
    this.navCtrl.push(ChatPage);
  }
  
  goToChatdb(){
    
  }

  GetMessage(){
    var messageRef= firebase.database().ref().child("Mensajes");
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.message=[];
      for( var key in data){
        this.message.unshift(data[key]);
      }
      console.log(this.message);
      this.events.publish('updateScreen');
    })
  }

  scrollToBottom2(){
    document.getElementById("list").style.display = "none";
    document.getElementById("list").style.display = "block";
  }


}

