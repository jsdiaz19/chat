import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {BdProvider} from '../../providers/bd/bd';
/**
 * Generated class for the LostpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostpassword',
  templateUrl: 'lostpassword.html',
})
export class LostpasswordPage {
  email;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController, private auth: BdProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostpasswordPage');
  }
  
  goToLogin(){
    this.auth.resetPassword(this.email).then(() => this.navCtrl.push(LoginPage))
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }
  
  goToBack(){
    this.navCtrl.push(LoginPage);
  }

}
