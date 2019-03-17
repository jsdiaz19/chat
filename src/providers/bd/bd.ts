import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
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

}
