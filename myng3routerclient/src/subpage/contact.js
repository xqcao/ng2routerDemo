import { Component} from 'angular2/core';

@Component({
  selector: 'contact-test',
  template: '<h1>this is Contact page</h1>',
  styles: [`h1{color:red}`]
  })
export class ContactHome {
    constructor() {
      console.log('from ContactHome console');
    }
  }
