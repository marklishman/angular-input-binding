import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <app-text-box *ngIf="showSection('text-box')"></app-text-box>
        <app-text-area *ngIf="showSection('text-area')"></app-text-area>
        <app-checkbox *ngIf="showSection('checkbox')"></app-checkbox>
        <app-radio *ngIf="showSection('radio')"></app-radio>
        <app-drop-down *ngIf="showSection('drop-down')"></app-drop-down>
        <app-attribute *ngIf="showSection('attribute')"></app-attribute>`
})
export class AppComponent {

  showSection(name: string): boolean {
    if (!window.location.search) {
      return true;
    }
    const PARAM = window.location.search.substr(1);
    return PARAM === name;
  }
}
