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
}
