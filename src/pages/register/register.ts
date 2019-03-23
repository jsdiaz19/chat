import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {BdProvider } from '../../providers/bd/bd';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  notification;
  usr={};
  Form= new FormGroup({
    Nom: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    tel: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmed: new FormControl('',Validators.required),
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth :  BdProvider,public alertCtrl : AlertController,private afDB: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  goToHome(){
    this.navCtrl.push(HomePage);
  }
  
  goToBack(){
    this.navCtrl.push(LoginPage);
  }

  // Register(){
  //   this.auth.registerUser(this.user.correo,this.user.password)
  //   .then((user) => {
  //     // El usuario se ha creado correctamente
  //   })
  //   .catch(err=>{
  //     let alert = this.alertCtrl.create({
  //       title: 'Error',
  //       subTitle: err.message,
  //       buttons: ['Aceptar']
  //     });
  //     alert.present();
  //   })

  // }

  Register(){
    if(!this.Form.invalid && this.Form.controls['password'].value==this.Form.controls['confirmed'].value){
      this.auth.registerUser(this.Form.controls['Email'].value,this.Form.controls['password'].value)
      .then((user) => {
        this.afDB.list("/usuarios/").push( {nombre: this.Form.controls['Nom'].value,tel: this.Form.controls['tel'].value,password:this.Form.controls['password'].value,correo:this.Form.controls['Email'].value} );
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
      alert('Hay campos incorrectamente diligenciado');
    }
  }

  test(){
    console.log(this.Form.controls['Nom'].hasError('required'),this.Form.touched,'ggg');
  }
}
