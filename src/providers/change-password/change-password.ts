import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
/*
  Generated class for the ChangePasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChangePasswordProvider {

  constructor(public http: HttpClient, private afAuth: AngularFireAuth) {
  }

  /**
   *  this function update password of curren user
   */
  UpdatePassword(newPassword: string){
    return this.afAuth.auth.currentUser.updatePassword(newPassword).then(resp=> Promise.resolve(resp))
    .catch( error=> Promise.resolve(error))
  }

}
