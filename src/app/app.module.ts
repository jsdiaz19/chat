import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {ChatdbPage} from '../pages/chatdb/chatdb';
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
import { Vibration } from '@ionic-native/vibration';
import { RegisterProvider } from '../providers/register/register';
import { LoginProvider } from '../providers/login/login';
import { DataProvider } from '../providers/data/data';
import { ChangePasswordProvider } from '../providers/change-password/change-password';
import {RelatioshipPage} from '../pages/relatioship/relatioship'
import {AddFriendPage} from '../pages/add-friend/add-friend';
import { AvatarModule } from 'ngx-avatar';
import { IonTextAvatar } from 'ionic-text-avatar';
import { Toast } from '@ionic-native/toast/ngx';
import { MorseProvider } from '../providers/morse/morse';
import { VibrationProvider } from '../providers/vibration/vibration';
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
    ProfilePage,
    ChatdbPage,
    RelatioshipPage,
    AddFriendPage,
    IonTextAvatar,
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
    ReactiveFormsModule,
    AvatarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ChatdbPage,
    LostpasswordPage,
    RegisterPage,
    ChatPage,
    ProfilePage,
    RelatioshipPage,
    AddFriendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BdProvider,
    RegisterProvider,
    LoginProvider,
    DataProvider,
    Toast,
    ChangePasswordProvider,
    MorseProvider,
    VibrationProvider,
  ]
})
export class AppModule {}
