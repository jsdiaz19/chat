import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { LoginPage } from '../pages/login/login';
import { LostpasswordPage } from '../pages/lostpassword/lostpassword';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/Chats/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BdProvider } from '../providers/bd/bd';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const firebaseConfig = {
  apiKey: "AIzaSyCEN16Yevh_zCkq2nREpB7aJGgRA-tIQEE",
  authDomain: "tesis-69389.firebaseapp.com",
  databaseURL: "https://tesis-69389.firebaseio.com",
  projectId: "tesis-69389",
  storageBucket: "tesis-69389.appspot.com",
  messagingSenderId: "773915078479"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LostpasswordPage,
    RegisterPage,
    ChatPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LostpasswordPage,
    RegisterPage,
    ChatPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BdProvider,
  ]
})
export class AppModule {}
