import { Component} from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';


import { AboutHome} from './subpage/about';
import { WelcomeHome} from './subpage/welcome';
import { ContactHome} from './subpage/contact';

@Component({
  directives: [AboutHome, ROUTER_DIRECTIVES],
  selector: 'hello-world',
  template: `
  <p>Hello world page Nav:</p>
  <nav>
  <a [routerLink]="['Welcome']">Welcome-Home</a>
    <a [routerLink]="['About']">About-Home</a>
    <a [routerLink]="['Contact']">Contacts</a>
  </nav>
  <router-outlet></router-outlet>
    `,
  styles: [`
      a{
        text-decoration:none
      }
      a:hover{color:red;}
      `],
  providers: [ROUTER_PROVIDERS]
  })
@RouteConfig([{
  path: '/about',
  component: AboutHome,
  name: 'About',

}, {
  path: "/contact",
  component: ContactHome,
  name: "Contact",

}, {
  path: '/welcome',
  component: WelcomeHome,
  name: 'Welcome',
  useAsDefault: true
}])


export class HelloWorld {

  }
