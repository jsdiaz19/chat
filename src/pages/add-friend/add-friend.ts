import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform} from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import {DataProvider} from '../../providers/data/data';
/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var window: any;
@IonicPage()
@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {
  User=[];
  filteredusers=[];
  email: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController, 
    private afDB: AngularFireDatabase,
    private data: DataProvider,
    private platform: Platform) {

  }

  
  /**
   * this function show messages type Toast
   * @param message is the message to show
   */

  ShowToast(message){
    this.platform.ready().then(()=>{
      window.plugins.toast.show(message,"short","bottom")  
    })
  }

  /**
      * this function adds two users as friends
      * using firebase
      * used variables:
        * current is the current user's information
        * email is email of other user
        * isUser indicates whether the user exists or not  

   */

  AddFriend(){
    var current= this.data.CurrentUser();
    firebase.database().ref("/usuarios").orderByChild('uid').once('value', (snapshot) => {    
      let data = snapshot.val();                                                              
      var isUser: Boolean = false;
      for (var key in data){
        if(data[key]['info'].correo == this.email ){
          isUser= true;
          this.afDB.list("/usuarios/"+ key+"/mensajes/"+current.uid,).push({type: 'incoming', message: 'nuevos amigos'});
          this.afDB.list("/usuarios/"+key+"/mensajes/"+current.uid).set("nombre",current.nombre);                                           
          this.afDB.list("/usuarios/"+key+"/mensajes/"+current.uid).set("viewed",'not-viewed');
          
          this.afDB.list("/usuarios/"+ current.uid+"/mensajes/"+ key).push({type: 'outcoming',message: 'nuevo amigos'});
          this.afDB.list("/usuarios/"+current.uid+"/mensajes/"+key).set("nombre",data[key]['info'].nombre);
          this.afDB.list("/usuarios/"+current.uid+"/mensajes/"+key).set("viewed",'not-viewed');
          this.ShowToast('Ahora son amigos');
          break;
        }
      }
      if( isUser){ 
        this.navCtrl.push(HomePage);
      }
      else{ 
        this.ShowToast('El usuario no existe');
      }
    })
  }




}
