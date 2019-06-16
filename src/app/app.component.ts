import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {DataProvider} from '../providers/data/data';
import * as firebase from 'firebase';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: DataProvider) {
    this.auth.Session.subscribe(session=>{
      if(session!=null){
        this.auth.SetUser(firebase.auth().currentUser.uid).then(res=>{
          this.rootPage = HomePage; 
        })
      }
      else{ 
        this.rootPage = LoginPage; 
      }
    });
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

