import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LostpasswordPage } from '../lostpassword/lostpassword';
import {LoginProvider} from '../../providers/login/login'
import {DataProvider} from '../../providers/data/data'
import {FormGroup, Validators,FormControl } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  Form= new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    public auth :  LoginProvider, 
    private Data: DataProvider,
    private platform: Platform) {
  }
  
  /**
   * this function redirect to register page
   */

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  
  /**
   * this function redirect lostPassword page
   */

  goToLostPassword(){
    this.navCtrl.push(LostpasswordPage);
  } 

  /**
   * this function show message type Toast
   */
  
  ShowToast(message){
    this.platform.ready().then(()=>{
      window.plugins.toast.show(message,"short","bottom")
    })
  }

/**
  *   this function allows a user to enter the system
*/

  login(){
    if(!this.Form.invalid){
      this.auth.loginUser(this.Form.controls['user'].value,this.Form.controls['password'].value)
        .then(user=>{
          this.ShowToast('Bienvenido');
          this.Data.SetUser(user.user.uid);
        })
        .catch( err=>{
          this.ShowToast('Usuario no registrado');
        })
    }
    else{
      this.ShowToast('Usuario no registrado');
    }
      
  }
  
}
