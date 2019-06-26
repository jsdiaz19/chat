import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {DataProvider} from '../../providers/data/data';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController, private auth: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostpasswordPage');
  }
  
  /**
   *  this function reset password of current user 
   */
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
  
  /**
   *  this function redirect login page
   */
  
  goToBack(){
    this.navCtrl.push(LoginPage);
  }

}
