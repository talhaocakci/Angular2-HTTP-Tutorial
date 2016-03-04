import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


@Component({
    selector: 'hello-app',
    template: `
        <h1>Hello, {{osman}}!</h1>
        Say hello to: <input [value]="osman" (input)="assignCustomValue($event)">
    `
})
export class HelloApp {
    osman: string = 'World';

    assignCustomValue(e){
    this.osman = e.target.value
    }
}

bootstrap(HelloApp);
