import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {DataProvider} from '../../providers/data/data';
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
  message: string="";
  mensajes;
  ChatId: string;
  name: string;
  keyDownDate = null;
  keyUpDate = null;
  keyPressDuration = null;
  spaceDuration = 500;
  
  _ALPHABET_={
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G":  "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....--",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    "?": "..--..",
    "_": "..--.-",
    "\"": ".-..-.",
    "+": ".-.-.",
    ".": ".-.-.-",
    "@": ".--.-.",
    "-": "-....-",
    "=": "-...-",
    "/": "-..-.",
    "\u0020": "-.-.-",
    "!": "-.-.--",
    "()": "-.--.-",
    ",": "--..--",
    "Ñ": "--.--",
    "Ö": "---.",
    ":": "---...",
    "CH": "----",
    "'": ".----.",
    ";": "-.-.-."
  }
  _MORSE_CODE_ = {
    "data": "",
    "left": {
        "data": "E",
        "left": {
            "data": "I",
            "left": {
                "data": "S",
                "left": {
                    "data": "H",
                    "left": {
                        "data": "5",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "4",
                        "left": null,
                        "rigth": null
                    }
                },
                "rigth": {
                    "data": "V",
                    "left": {
                        "data": "Ŝ",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "3",
                        "left": null,
                        "rigth": null
                    }
                }
            },
            "rigth": {
                "data": "U",
                "left": {
                    "data": "F",
                    "left": {
                        "data": "É",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": null
                },
                "rigth": {
                    "data": "Ü",
                    "left": {
                        "data": "Đ",
                        "left": {
                            "data": "?",
                            "left": null,
                            "rigth": null
                        },
                        "rigth": {
                            "data": "_",
                            "left": null,
                            "rigth": null
                        }
                    },
                    "rigth": {
                        "data": "2",
                        "left": null,
                        "rigth": null
                    }
                }
            }
        },
        "rigth": {
            "data": "A",
            "left": {
                "data": "R",
                "left": {
                    "data": "L",
                    "left": null,
                    "rigth": {
                        "data": "È",
                        "left": {
                            "data": "\"",
                            "left": null,
                            "rigth": null
                        },
                        "rigth": null
                    }
                },
                "rigth": {
                    "data": "Ä",
                    "left": {
                        "data": "+",
                        "left": null,
                        "rigth": {
                            "data": ".",
                            "left": null,
                            "rigth": null
                        }
                    },
                    "rigth": null
                }
            },
            "rigth": {
                "data": "W",
                "left": {
                    "data": "P",
                    "left": {
                        "data": "Þ",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "À",
                        "left": {
                            "data": "@",
                            "left": null,
                            "rigth": null
                        },
                        "rigth": null
                    }
                },
                "rigth": {
                    "data": "J",
                    "left": {
                        "data": "Ĵ",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "1",
                        "left": {
                            "data": "'",
                            "left": null,
                            "rigth": null
                        },
                        "rigth": null
                    }
                }
            }
        }
    },
    "rigth": {
        "data": "T",
        "left": {
            "data": "N",
            "left": {
                "data": "D",
                "left": {
                    "data": "B",
                    "left": {
                        "data": "6",
                        "left": null,
                        "rigth": {
                            "data": "-",
                            "left": null,
                            "rigth": null
                        }
                    },
                    "rigth": {
                        "data": "=",
                        "left": null,
                        "rigth": null
                    }
                },
                "rigth": {
                    "data": "X",
                    "left": {
                        "data": "/",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": null
                }
            },
            "rigth": {
                "data": "K",
                "left": {
                    "data": "C",
                    "left": {
                        "data": "Ç",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "\u0020",
                        "left": {
                            "data": ";",
                            "left": null,
                            "rigth": null
                        },
                        "rigth": {
                            "data": "!",
                            "left": null,
                            "rigth": null
                        }
                    }
                },
                "rigth": {
                    "data": "Y",
                    "left": {
                        "data": "Ĥ",
                        "left": null,
                        "rigth": {
                            "data": "()",
                            "left": null,
                            "rigth": null
                        }
                    },
                    "rigth": null
                }
            }
        },
        "rigth": {
            "data": "M",
            "left": {
                "data": "G",
                "left": {
                    "data": "Z",
                    "left": {
                        "data": "7",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "",
                        "left": null,
                        "rigth": {
                            "data": ",",
                            "left": null,
                            "rigth": null
                        }
                    }
                },
                "rigth": {
                    "data": "Q",
                    "left": {
                        "data": "Ĝ",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "Ñ",
                        "left": null,
                        "rigth": null
                    }
                }
            },
            "rigth": {
                "data": "O",
                "left": {
                    "data": "Ö",
                    "left": {
                        "data": "8",
                        "left": {
                            "data": ":",
                            "left": null,
                            "rigth": null
                        },
                        "rigth": null
                    },
                    "rigth": null
                },
                "rigth": {
                    "data": "CH",
                    "left": {
                        "data": "9",
                        "left": null,
                        "rigth": null
                    },
                    "rigth": {
                        "data": "0",
                        "left": null,
                        "rigth": null
                    }
                }
            }
        }
    }
};

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private data: DataProvider) {
    this.ChatId= this.navParams.get('uid');
    this.afDB.list("/usuarios/"+firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId).set("viewed",'viewed');
    this.name= this.navParams.get('nombre');
    this.getChat();
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
  
  

  dot(){
    document.getElementById('message').textContent+='.';
    this.message+='.';    
  }

  dash(){ 
    document.getElementById('message').textContent+='-';
    this.message+='-';
  }  
  
  keydownSpaceLetter(){
    this.keyDownDate = new Date();
1  }


  keyupSpaceWord(){
    this.keyUpDate = new Date();
    this.keyPressDuration = ( this.keyUpDate - this.keyDownDate);

    if (this.keyPressDuration <= this.spaceDuration){
        this.SpaceLetter();
    } else {
        this.SpaceWord();
    }

    this.keyDownDate = null;
    this.keyUpDate = null;

  }

  SpaceLetter(){
    document.getElementById('message').textContent+=" ";
    this.message+=' ';
  }

  SpaceWord(){
    document.getElementById('message').textContent+=" ";
    this.message+=" /";
  }

  ClearString(){
    document.getElementById('message').textContent="";
    this.message ='';
  }

  Morse(){
    var message = "";
    var mmCopy = [];
    if(this.message){
      mmCopy = this.message.split(/\||\n|\s/g);
      for (var x = 0; x < mmCopy.length; x++) {
        if (mmCopy[x] !== ""){
          var input = mmCopy[x].split("");
          var temp= this._MORSE_CODE_;
          for (var i = 0; i < input.length; i++) {
            if( input[i] === "."){
              temp= temp.left;
            }
            else if( input[i] == '-'){
              temp= temp.rigth;
            }

            else if(input[i]=="/"){
                message+=" ";
            }
          }
          message+=temp.data;
        }
      }
      this.message="";
      document.getElementById('message').textContent=" ";
      this.SendMessage(message);
    }
}

Traducir(code){
    var message = "";
    var inputMessage = code.split("").map(function(key){
      return key.toUpperCase();
    });
    for(var i=0;i<inputMessage.length;i++){
      var key = inputMessage[i];
      message+= this._ALPHABET_[key]+"\u0020";
    }
    return message;
  }

getChat(){
    var messageRef= firebase.database().ref("/usuarios/"+ firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId);
    messageRef.on("value",(snap)=>{
      var data= snap.val();
      this.afDB.list("/usuarios/"+firebase.auth().currentUser.uid+"/mensajes/"+this.ChatId).set("viewed",'viewed');
      this.mensajes=[];
      for(var key in data){
        if(key!='nombre' && key!='viewed'){
          this.mensajes.push({menssaje: this.Traducir(data[key]['message']), type: data[key]['type']} );
          
        }
      }
    })
  }

  SendMessage(mensaje){
    var current= this.data.CurrentUser();
    this.afDB.list("/usuarios/"+current.uid +"/mensajes/"+this.ChatId).push({type: 'incoming', message: mensaje});
    this.afDB.list("/usuarios/"+this.ChatId +"/mensajes/"+current.uid).push({type: 'outcoming', message:mensaje});
    this.afDB.list("/usuarios/"+this.ChatId+"/mensajes/"+current.uid).set("viewed","not-viewed");
  }

}
