import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatdbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatdb',
  templateUrl: 'chatdb.html',
})
export class ChatdbPage {
  
  StartTime = 0;
  EndTime = 0;
  //Time = 0;
  Letter = "";
  Word = "";
  //var Sentence = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatdbPage');
  }
  
  
  Start = new Promise(function(resolve, reject) {
    var d = new Date();
    resolve(d.getTime());
  });
  
  End = new Promise(function(resolve, reject) {
    var d = new Date();
    resolve(d.getTime());
  });
  
  // p1.then(function(value) {
  //   console.log(value); // Success!
  // }, function(reason) {
  //   console.log(reason); // Error!
  // });
  
  

  // dot(){
  //   this.Letter = this.Letter + ".";
  //   if( this.StartTime == 0){
  //     this.Start();
  //     this.message();
  //   }else{
  //     this.End();
  //     this.message();
  //   }
    
    
  // }

  // dash(){ 
  //   this.Letter = this.Letter + "_";
  //   if( this.StartTime == 0){
  //     this.Start();
  //     this.message();
  //   }else{
  //     this.End();
  //     this.message();
  //   }
  // }  
  
  message(){
    if( (this.EndTime - this.StartTime) > 600){
      if( this.Word == ""){
        this.Word = this.Letter;
      }else{
        this.Word = this.Word + " " + this.Letter;
      }
      
      this.Letter = "";
      this.EndTime = 0;
      this.StartTime = 0;
    }
  }

  
  send(){
    console.log('Message: ' + this.Word);
  }

}
