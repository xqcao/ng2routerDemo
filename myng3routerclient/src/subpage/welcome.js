import { Component} from 'angular2/core';

@Component({
  selector: 'welcome-test',
  template: `<h1>this is welcome page</h1>`,
  styles: [`h1{color:green}`]
  })
export class WelcomeHome {
    constructor() {
      console.log('from WelcomeHome console');
    }
  }
