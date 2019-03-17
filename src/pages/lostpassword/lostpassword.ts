import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostpasswordPage');
  }
  
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  
  goToBack(){
    this.navCtrl.push(LoginPage);
  }

}
