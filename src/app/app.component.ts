import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {BdProvider} from '../providers/bd/bd';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  data;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: BdProvider) {
    this.auth.Session.subscribe(session=>{
      if(session!=null && session){
        this.auth.GetData().subscribe(result=>{
          this.data=result;
          this.data.forEach((element)=>{
            if(element.correo==session.email){
              this.auth.SetUser(element);
            }
          })
        })
          this.rootPage = HomePage;

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

