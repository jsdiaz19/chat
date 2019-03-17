import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BdProvider } from '../../providers/bd/bd';

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
  CurrentUser
  constructor(public navCtrl: NavController, public navParams: NavParams,private bd: BdProvider) {
    this.CurrentUser=this.bd.GetUser();
    console.log(this.CurrentUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
