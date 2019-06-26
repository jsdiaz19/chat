import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the RegisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient, private afAuth :  AngularFireAuth,) {
    console.log('Hello RegisterProvider Provider');
  }

  /**
   * this function register a new user
   * @param email is user's email
   * @param password is user's password
   */
  
  registerUser(email:string, password:string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then(res=>Promise.resolve(res))
    .catch(err=>Promise.reject(err))
 }
 
}
