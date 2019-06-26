import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider } from '../../providers/data/data';
import {FormGroup, Validators,FormControl } from '@angular/forms';
import {ChangePasswordProvider} from '../../providers/change-password/change-password';
import {HomePage} from '../home/home';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  CurrentUser;
  
  Form= new FormGroup({
    Password: new FormControl('',Validators.required),
    NewPassword: new FormControl('',Validators.required),
    PasswordConfirm: new FormControl('',Validators.required)
  });

  constructor(public navCtrl: NavController, public navParams: NavParams,private bd: DataProvider, private Password: ChangePasswordProvider, private afdb: AngularFireDatabase) {
    this.CurrentUser=this.bd.CurrentUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  /**
   *  this function change password of current user
   */

  ChangePassword(){
    if( !this.Form.invalid && this.Form.controls['Password'].value== this.CurrentUser.password
      && this.Form.controls['NewPassword'].value== this.Form.controls['PasswordConfirm'].value){
      this.Password.UpdatePassword(this.Form.controls['NewPassword'].value).then(result=>{
        this.bd.ChangePassword(this.Form.controls['NewPassword'].value)
        this.CurrentUser.password=this.Form.controls['NewPassword'].value;
        this.afdb.list("usuarios/").update(this.CurrentUser.uid,this.CurrentUser);
        this.navCtrl.push(HomePage);
      })
      .catch((err)=>{
        this.Form.reset();
        alert(err.message);
      })
    }else{
      alert('Por favor verifique los datos');
    }
  }

  /**
   *  this function logout current user
   */
  
  Logout(){
    this.bd.logout();
  }
}
