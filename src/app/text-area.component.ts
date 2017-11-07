import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  template: `
        <h1>Text Area</h1>
        <textarea ref-textarea [(ngModel)]="textValue" rows="4"></textarea><br/>
        <button (click)="logText(textarea.value)">Update Log</button>
        <button (click)="textValue=''">Clear</button>

        <h2>Log <button (click)="log=''">Clear</button></h2>
        <pre>{{log}}</pre>`
})
export class TextAreaComponent {

  textValue = 'initial value';
  log = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }
}

