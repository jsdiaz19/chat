import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
/*
  Generated class for the BdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BdProvider {
  CurrentUsuer;
  Message=[];
  constructor(private afAuth :  AngularFireAuth, private afDB: AngularFireDatabase) {
    console.log('Hello BdProvider Provider');
  }


  GetData(){
    return this.afDB.list("usuarios/").valueChanges();
  }



  SendMessage(message: string){
    var messageRef= firebase.database().ref().child("Mensajes");
    messageRef.push({mensaje: message, nombre: this.CurrentUsuer.nombre});
  }

  GetMessage(){
    var messageRef= firebase.database().ref().child("Mensajes");
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.Message=[];
      for( var key in data){
        this.Message.push(data[key]);
      }
      return this.Message;
    })
  }

}
