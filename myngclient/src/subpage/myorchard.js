import { Component, Injectable} from 'angular2/core';
import { Http} from 'angular2/http';

@Component({
  selector: 'contact',
  template: `<p>this is MyOrchard page</p>
  <button (click)="gitAll()">show it</button>
  <ul class="list-inline">
    <li *ngFor="#items of users">
        <div class="card">
          <img class="card-img-top" src="{{items.avatar_url}}">
            <div class="card-block">
              <h4 class="card-title">{{items.login}}</h4>
              <a href="{{items.html_url}}" class="btn btn-primary">Contact {{items.login}}</a>
            </div>
        </div>
        <br/>
    </li>
  </ul>
<!--
  <hr/>
  <ul>
    <li *ngFor="#item of users">
    {{item.login}}
      <canvas class="header-bg" width="250" height="70"></canvas>
      <div class="avatar">
        <img src="{{item.avatar_url}}" />
      </div>
    </li>
  </ul>
  -->
  `,
  styles: [`p{color:blue}`]
  })

@Injectable()
export class MyOrchard {
    constructor(_http: Http) {
      this._http = _http;
    }
    users: any;
    gitAll() {
      this._http.get('https://api.github.com/users').subscribe(res => this.users = res.json());
    }
  }
