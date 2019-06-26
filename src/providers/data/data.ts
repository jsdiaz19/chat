import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/**
 * this interface is the object related to the users
 */
export interface User{
  uid: String;            // is user's uid 
  nombre: String;         // is user's name
  correo: String;         // is user's email
  discapacidad: String;   // is user's type disability
  password: String;       // is user's password
  tel: number;            // is user's phone
}
@Injectable()
export class DataProvider {
  User:User;
  constructor(private afAuth :  AngularFireAuth, private afDB: AngularFireDatabase) {

  }
  /**
   * this function saves the user's information
   * @param uid is uid of current user
   */

  SetUser(uid){
    let receivedUser:any;
    return new Promise( resolve =>{
      this.afDB.object('usuarios/'+uid+"/info/").valueChanges().subscribe(user=>{
        receivedUser=user;
        this.User=receivedUser;
        this.User.uid=uid;
        resolve(this.User);
      });
    })
    
   
  }
  
  /**
   * this function reset password of current user
   * @param email 
   */

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
  }

  /**
   * this function logout current user
   */

  logout(){
    this.afAuth.auth.signOut().catch( function(error){
      alert(error.code);
    });
  }

  /**
   * this function get current session
   */

  get Session(){
    return this.afAuth.authState;
  }

  /**
   * this function change password of current user
   * @param password is new password
   */
  ChangePassword(password: String){
    this.User.password=password;
  }

  /**
   * this function return current user
   */
  
  CurrentUser(){
    return this.User;
  }
}
