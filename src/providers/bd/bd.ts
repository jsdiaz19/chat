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

  loginUser(email:string, password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user=>Promise.resolve(user))
      .catch(err=>Promise.reject(err))
  }

  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res)=>{
     // El usuario se ha creado correctamente.
    })
    .catch(err=>Promise.reject(err))
 }

  GetData(){
    return this.afDB.list("usuarios/").valueChanges();
  }


  SetUser(usr){
    this.CurrentUsuer=usr;
  }

  GetUser(){
    return this.CurrentUsuer;
  }

  logout(){
    this.afAuth.auth.signOut().then(()=>{
      
    })
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      // .then(() => console.log("email sent"))
      // .catch((error) => console.log(error))
  }

  get Session(){
    return this.afAuth.authState;
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

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
        })
      })
    })
  }
}
