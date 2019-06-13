import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';


/*
  Generated class for the VibrationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VibrationProvider {

  constructor(public http: HttpClient, private vibration: Vibration) {
    console.log('Hello VibrationProvider Provider');
  }

  vibrateDot(){
    return new Promise(resolve=>
        setTimeout(()=> {
            this.vibration.vibrate([500,1000,0]);
            resolve(5);
        },1500)
    )
  }

  vibrateDash(){
    return new Promise(resolve=>
        setTimeout(()=> {
            this.vibration.vibrate([700,1000,0]);
            resolve(5);
        },1700)
    )
  }

  async VibrateMessage(message){
    for ( var i in message){
      if( message[i]=="."){
        var temp = await this.vibrateDot()
      }
      else if( message[i]=="-"){
        var temp = await this.vibrateDash()
      }         
    }
  }

  stopVibrate(){
    this.vibration.vibrate(0);
  }

}
