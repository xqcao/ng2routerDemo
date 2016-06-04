import { Component} from 'angular2/core';

import { ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import { Welcome} from './subpage/welcome';
import { About} from './subpage/about';
import { ContactHome} from './subpage/contact';
import { MyOrchard} from './subpage/myorchard';

@Component({
  selector: 'my-navbar',
  templateUrl: 'navbar.html',
  directives: [ROUTER_DIRECTIVES]
  })

@RouteConfig([{
  path: '/my-welcome',
  name: 'Mywelcome',
  component: Welcome,
  useAsDefault: true
}, {
  path: '/my-orchard',
  name: 'Myorchard',
  component: MyOrchard,
}, {
  path: '/my-about',
  name: 'Myabout',
  component: About,
}, {
  path: '/my-contact',
  name: 'Mycontact',
  component: ContactHome,
}])

export class Navbar {

  }


  // <nav>
  //   <a [routerLink]="['Mywelcome']">Welcome</a>
  //   <a [routerLink]="['Myabout']">About</a>
  //   <a [routerLink]="['Mycontact']">Contact</a>
  //   <a [routerLink]="['Mygit']">ViewOne</a>
  //
  // </nav>
  // <router-outlet></router-outlet>
