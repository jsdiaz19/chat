import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MorseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MorseProvider {
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
  }
  constructor(public http: HttpClient) {
    console.log('Hello MorseProvider Provider');
  }

  /**
   * this function translates a message to morse code
   * @param mensaje is the message to be translated
   */
  Morse(mensaje){
    var message = "";
    var mmCopy = [];
    if(mensaje){
      mmCopy = mensaje.split(/\||\n|\s/g);
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
      return message;
    }   
}

/**
 * this function traslate a message to Spanish alphabet
 * @param code is code morse to be traslated
 */
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

}
