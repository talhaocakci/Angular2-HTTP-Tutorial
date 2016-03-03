// app.ts

import {Component, View} from 'angular2/core';
import {HTTP_BINDINGS, Http, Headers} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';

// for map and other methods of an http call result
import 'rxjs/Rx';

@Component({
  selector: 'random-app'
})

@View({
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  template: `
  <header>
    <h1 class="title">Angular 2 HTTP</h1>
  </header>


  <section>
    <h2>Random Quote</h2>
    <hr>
    <h3>{{randomQuote}}</h3>
    <button (click)="getRandomQuote()">Get Random Quote!</button>
  <section>


  `
})



export class App {

  constructor(public http: Http) {

  }

  getRandomQuote() {
  this.http.get('http://localhost:3001/api/random-quote')
    .map(res => res.text())
    .subscribe(
      data => this.randomQuote = data,
      err => this.logError(err),
      () => console.log('Random Quote Complete')
    );
}

logError(err) {
  console.error('There was an error: ' + err);
}

}

bootstrap(App, [HTTP_BINDINGS])
