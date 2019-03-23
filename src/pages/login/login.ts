import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LostpasswordPage } from '../lostpassword/lostpassword';
import { HomePage } from '../home/home';
import {BdProvider } from '../../providers/bd/bd';
import {FormGroup, Validators,FormControl } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController,public auth :  BdProvider) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }
  
  // goToHome(){
  //   this.navCtrl.push(HomePage);
  // }
  
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }
  
  goToLostPassword(){
    this.navCtrl.push(LostpasswordPage);
  } 

  login(){
    if(!this.Form.invalid){
      this.auth.loginUser(this.Form.controls['user'].value,this.Form.controls['password'].value ).then((user) => {
        this.auth.GetData().subscribe(result=>{
          this.data=result;
          this.data.forEach(element => {
            if(element.correo==this.Form.controls['user'].value){
              this.auth.SetUser(element);
              this.navCtrl.push(HomePage);
            }
          });
        })
        
      })
       .catch(err=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    }
    else{
      alert('Hay campos incorrectamente diligenciado');
    }
      
  }
  
}
