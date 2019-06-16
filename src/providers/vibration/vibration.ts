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
  stop: boolean = false;
  constructor(public http: HttpClient, private vibration: Vibration) {
    console.log('Hello VibrationProvider Provider');
  }

  vibrateDot(){
    return new Promise(resolve=>
        setTimeout(()=> {
          if(!this.stop){ 
            this.vibration.vibrate([500,1000,0]); 
          }
          resolve(5);
        },1500)
    )
  }

  vibrateDash(){
    return new Promise(resolve=>
        setTimeout(()=> {
          if(!this.stop){
            this.vibration.vibrate([700,1000,0]); 
          }     
          resolve(5);
        },1700)
    )
  }

  async VibrateMessage(message){
    var i = 0;
    do {
      if(message[i]=="."){
        await this.vibrateDot();
      }
      else if(message[i]=="-"){
        await this.vibrateDash()
      }
      i+=1;
   } while (!this.stop && i<message.length);
  }

  
  stopVibrate(){
    this.stop=true;
  }

  beginVibrate(){
    this.stop=false;
  }

}
