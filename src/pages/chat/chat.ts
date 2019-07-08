import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, List} from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {DataProvider} from '../../providers/data/data';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  ChatId: string;
  name: string;
  message;
  mensaje: string='';
  @ViewChild(Content) content: Content
  @ViewChild(List, {read: ElementRef}) chatList: ElementRef;
  mutationObserver: MutationObserver;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase,private data: DataProvider) {
    this.ChatId= this.navParams.get('uid');
    this.name= this.navParams.get('nombre');
    this.afDB.list("/usuarios/"+firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId).set("viewed",'viewed');
    this.getChat();
  }


  scrollToBottom() {
    setTimeout(()=>{
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 1000);
  }

  /**
    *  this function sends messages and updates the database
   */

  SendMessage(){
    if(this.mensaje!=''){
      var current= this.data.CurrentUser();
      this.afDB.list("/usuarios/"+current.uid +"/mensajes/"+this.ChatId).push({type: 'incoming', message: this.mensaje});
      this.afDB.list("/usuarios/"+this.ChatId +"/mensajes/"+current.uid).push({type: 'outcoming', message: this.mensaje});
      this.afDB.list("/usuarios/"+this.ChatId+"/mensajes/"+current.uid).set("viewed","not-viewed");
      this.mensaje='';
      this.scrollToBottom();
    }
  }

/**
  *   this function brings the messages and updates the view 
 */

  getChat(){
    var messageRef= firebase.database().ref("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId);
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.message=[];
      for(var key in data){
        if(key!='nombre' && key!='viewed'){
          this.message.push({menssaje: data[key]['message'], type: data[key]['type']} );
        }
      }
      this.scrollToBottom();
    })
  }
}
