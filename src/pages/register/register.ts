import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {RegisterProvider} from '../../providers/register/register';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, Validators,FormControl } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window: any;
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  notification;
  usr={};
  myPhoto: any;
  myPhotosRef: any;
  myPhotoURL: any;
  Form= new FormGroup({
    Nom: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    tel: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmed: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required)
  });
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth :  RegisterProvider,
    public alertCtrl : AlertController,
    private afDB: AngularFireDatabase,
    private platform: Platform,
    ) {
      document.addEventListener("deviceready", onDeviceReady, false);
      function onDeviceReady() {
          console.log(navigator.vibrate);
      }
  }

  /**
   * this function redirect Home page
   */
  
  goToHome(){
    this.navCtrl.push(HomePage);
  }
  
  /**
   *  this function redirect login page
   */

  goToBack(){
    this.navCtrl.push(LoginPage);
  }

  /**
   * this function show messages type Toast
   * @param message is the message to show
   */

  ShowToast(message){
    this.platform.ready().then(()=>{
      window.plugins.toast.show(message,"short","bottom")
    })
  }

  /**
   *  this function registers a new user
   */

  Register(){
    if(!this.Form.invalid && this.Form.controls['password'].value==this.Form.controls['confirmed'].value){
      this.auth.registerUser(this.Form.controls['Email'].value,this.Form.controls['password'].value)
      .then((user) => {
        this.afDB.list("/usuarios/"+ user.user.uid).set("info",{nombre: this.Form.controls['Nom'].value,tel: this.Form.controls['tel'].value,password:this.Form.controls['password'].value,correo:this.Form.controls['Email'].value, discapacidad: this.Form.controls['type'].value} );
        this.ShowToast('Registro exitoso');
        this.navCtrl.push(LoginPage);
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
      if( this.Form.controls['password'].value!=this.Form.controls['confirmed'].value){
        this.ShowToast('Verifica la contraseña')
      }
      else{
        this.ShowToast('Hay campos incorrectamente diligenciado');
      }
      navigator.vibrate([2000]);
    }
  }

}
