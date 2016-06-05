import { Component} from 'angular2/core';
import { bootstrap} from 'angular2/platform/browser';

import { ROUTER_PROVIDERS} from 'angular2/router';

import { HTTP_PROVIDERS} from 'angular2/http';

import { Navbar} from 'navbar';

bootstrap(Navbar, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
