import { Component } from '@angular/core';

/**
 * Generated class for the RelatioshipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'relatioship',
  templateUrl: 'relatioship.html'
})
export class RelatioshipComponent {

  text: string;

  constructor() {
    console.log('Hello RelatioshipComponent Component');
    this.text = 'Hello World';
  }

}
