import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  constructor( ) {
  }

  /**
   * this function allows the entry of a specific user into the system
   * @param email is user's email
   * @param password is user's password
   */
  loginUser(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then( user=> Promise.resolve(user))
      .catch(error=> Promise.reject(error));
  }

}
