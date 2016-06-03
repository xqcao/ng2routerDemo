import { Component, View, provide} from 'angular2/core';
import { bootstrap} from 'angular2/platform/browser';
import { HelloWorld} from 'helloworld';
import { AboutHome} from './subpage/about';


import { ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(HelloWorld, [ROUTER_PROVIDERS]);

//import { APP_BASE_HREF} from 'angular2/router';
//provide(APP_BASE_HREF, useValue: '/'})
