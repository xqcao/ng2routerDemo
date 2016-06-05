import { Component} from 'angular2/core';
@Component({
  selector: 'contact',
  template: `<p id="p1">this is contact page</p>
  <button class="btn btn-default" (click)="showit()">Click on me to reveal the hidden treasure</button>

  <div class="transition" [ngClass]="{'transitionActive':show}" [hidden]="!show">
    <h1>I'm the hidden treasure :)</h1>

    <p >PHP is one of the most useful languages to know and is used everywhere you look online. In this tutorial, I start from the beginning and show you how to start writing PHP scripts.</p>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZdP0KM49IVk" frameborder="0" allowfullscreen></iframe>
    </div>
  `,
  styles: [`#p1 {color:blue}`]
  })

export class ContactHome {
    show = false;
    constructor() {}
    showit() {
      this.show = !this.show;

    }
  }
