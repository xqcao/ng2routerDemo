import { Component} from 'angular2/core';

@Component({
  selector: 'about-test',
  template: '<h1>this is about page</h1>',
  styles: [`h1{color:blue}`]
  })
export class AboutHome {
    constructor() {
      console.log('from about console');
    }
  }
