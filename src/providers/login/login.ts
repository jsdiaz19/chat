import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import {DataProvider} from '../../providers/data/data'

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  constructor( private afAuth :  AngularFireAuth, private afDB: AngularFireDatabase) {
  }

  loginUser(email:string, password:string){
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then( user=> Promise.resolve(user))
      .catch(error=> Promise.reject(error));
  }

}
