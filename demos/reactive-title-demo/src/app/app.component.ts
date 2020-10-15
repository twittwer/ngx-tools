import { Component } from '@angular/core';

@Component({
  selector: 'rtd-root',
  template: `
    <h1>Reactive Title Demo</h1>
    <rtd-navigation></rtd-navigation>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}