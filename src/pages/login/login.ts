import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LostpasswordPage } from '../lostpassword/lostpassword';
import { HomePage } from '../home/home';
import {LoginProvider} from '../../providers/login/login'
import {DataProvider} from '../../providers/data/data'
import {FormGroup, Validators,FormControl } from '@angular/forms';
import { Toast } from '@ionic-native/toast/ngx';
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
  
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  
  goToLostPassword(){
    this.navCtrl.push(LostpasswordPage);
  } 

  ShowToast(message){
    this.platform.ready().then(()=>{
      window.plugins.toast.show(message,"short","bottom")
    })
  }
  login(){
    if(!this.Form.invalid){
      this.auth.loginUser(this.Form.controls['user'].value,this.Form.controls['password'].value)
        .then(user=>{
          //this.ShowToast('Logeado');
          this.Data.SetUser(user.user.uid);
        })
        .catch( err=>{
          //this.ShowToast('El usuario no existo');
        })
    }
    else{
      //this.ShowToast('Hay campos incorrectamente diligenciado');
    }
      
  }
  
}
