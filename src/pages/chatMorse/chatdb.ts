import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {DataProvider} from '../../providers/data/data';
import {VibrationProvider} from '../../providers/vibration/vibration'
import { MorseProvider} from '../../providers/morse/morse'
/**
 * Generated class for the ChatdbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatdb',
  templateUrl: 'chatdb.html',
})
export class ChatMorsePage {
  message: string="";
  mensajes;
  currentMessage: number = -1;
  ChatId: string;
  name: string;
  keyDownDate = null;
  keyUpDate = null;
  keyPressDuration = null;
  spaceDuration = 500;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private data: DataProvider, private vibration: VibrationProvider,private morse: MorseProvider) {
    this.ChatId= this.navParams.get('uid');
    this.afDB.list("/usuarios/"+firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId).set("viewed",'viewed');
    this.name= this.navParams.get('nombre');
    this.getChat();
  }
  


  Start = new Promise(function(resolve, reject) {
    var d = new Date();
    resolve(d.getTime());
  });
  
  End = new Promise(function(resolve, reject) {
    var d = new Date();
    resolve(d.getTime());
  });
  
/**
 *  this function adds a point in the message
 */  

  dot(){
    document.getElementById('message').textContent+='.';
    this.message+='.';    
  }

  /**
 *  this function adds a dash in the message
 */  

  dash(){ 
    document.getElementById('message').textContent+='-';
    this.message+='-';
  }  

/**
 *  this function starts the pulsing time count 
 */

  keydownSpaceLetter(){
    this.keyDownDate = new Date();
1  }

/**
 *  this function takes the pulse time of the space button
 */

  keyupSpaceWord(){
    this.keyUpDate = new Date();
    this.keyPressDuration = ( this.keyUpDate - this.keyDownDate);

    if (this.keyPressDuration <= this.spaceDuration){
        this.SpaceLetter();
    } else {
        this.SpaceWord();
    }
    this.keyDownDate = null;
    this.keyUpDate = null;
  }

  SpaceLetter(){
    document.getElementById('message').textContent+=" ";
    this.message+=' ';
  }

  SpaceWord(){
    document.getElementById('message').textContent+=" ";
    this.message+=" /";
  }

/**
 *  this function deletes the current message  
 */

  ClearString(){
    document.getElementById('message').textContent="";
    this.message ='';
  }

/**
 *  this function converts a message to morse code
 */

  Morse(){
      var mess = this.morse.Morse(this.message)
      document.getElementById('message').textContent=" ";
      this.SendMessage(mess);
  }

/**
  *   this function brings the messages and updates the view 
 */

getChat(){
    var messageRef= firebase.database().ref("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId);
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.afDB.list("/usuarios/"+firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId).set("viewed",'viewed');
      this.mensajes=[];
      for(var key in data){
        if(key!='nombre' && key!='viewed'){
          this.mensajes.push({menssaje: this.morse.Traducir(data[key]['message']), type: data[key]['type'], isSelect: false} );
        }
      }
    })
  }

/**
  *  this function sends messages and updates the database
 */

  SendMessage(mensaje){
    navigator.vibrate([5000]);
    var current= this.data.CurrentUser();
    this.afDB.list("/usuarios/"+current.uid +"/mensajes/"+this.ChatId).push({type: 'incoming', message: mensaje});
    this.afDB.list("/usuarios/"+this.ChatId +"/mensajes/"+current.uid).push({type: 'outcoming', message:mensaje});
    this.afDB.list("/usuarios/"+this.ChatId+"/mensajes/"+current.uid).set("viewed","not-viewed");
  }

  /**
   *  this function moves upwards through the messages 
   */

  UpMessage(){
    if( this.currentMessage ==-1){
      this.currentMessage +=this.mensajes.length;
      this.mensajes[this.currentMessage].isSelect=true;
      this.vibration.beginVibrate();
      this.vibration.VibrateMessage(this.mensajes[this.currentMessage].menssaje);
    }
    else if( this.currentMessage>=1){
      this.vibration.stopVibrate();
      this.currentMessage-=1;
      this.mensajes[this.currentMessage].isSelect=true;
      this.mensajes[this.currentMessage+1].isSelect=false;
      this.vibration.beginVibrate();
      this.vibration.VibrateMessage(this.mensajes[this.currentMessage].menssaje);
    }
  }

/**
  *  this function moves down through the messages
*/

  DownMessage(){
    if( this.currentMessage>=0 && this.currentMessage<this.mensajes.length-1){
      this.vibration.stopVibrate();
      this.currentMessage+=1;
      this.mensajes[this.currentMessage].isSelect=true;
      this.mensajes[this.currentMessage-1].isSelect=false;
      this.vibration.beginVibrate();
      this.vibration.VibrateMessage(this.mensajes[this.currentMessage].menssaje);
    }
  }
}
