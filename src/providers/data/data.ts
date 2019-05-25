import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface User{
  uid: String;
  nombre: String;
  correo: String;
  discapacidad: String;
  password: String;
  tel: number;
}
@Injectable()
export class DataProvider {
  User:User;
  constructor(private afAuth :  AngularFireAuth, private afDB: AngularFireDatabase) {

  }

  SetUser(uid){
    let receivedUser:any;
    this.afDB.object('usuarios/'+uid+"/info/").valueChanges().subscribe(user=>{
      receivedUser=user;
      this.User=receivedUser;
      this.User.uid=uid;
    })
    
  }
  


  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
  }

  logout(){
    this.afAuth.auth.signOut().catch( function(error){
      alert(error.code);
    });
  }

  get Session(){
    return this.afAuth.authState;
  }

  ChangePassword(password: String){
    this.User.password=password;
  }

  CurrentUser(){
    return this.User;
  }
}
