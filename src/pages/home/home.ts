import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ChatPage } from '../chat/chat';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  
  goToPerfil(){
    this.navCtrl.push(ProfilePage);
  }
  
  goToChat(){
    this.navCtrl.push(ChatPage);
  }
  
  goToChatdb(){
    
  }

}
