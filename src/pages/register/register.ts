import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {BdProvider } from '../../providers/bd/bd';
import { AngularFireDatabase } from 'angularfire2/database';


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
  user={nombre:'',tel:0,password:'',correo:''};
  notification;
  usr={};

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
    this.auth.registerUser(this.user.correo,this.user.password)
    .then((user) => {
      this.afDB.list("/usuarios/").push(this.user);
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
}
