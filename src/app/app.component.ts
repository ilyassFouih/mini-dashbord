import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition } from '@angular/animations';
import { backward, forward } from './shared';
@Component({
  selector: 'app-root',
  template: `
    <div class="router-container" [@routeAnimation]="getId(outletTpl)">
      <router-outlet #outletTpl="outlet"></router-outlet>
    </div>
  `,
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2', forward()),
      transition('2 => 1', backward()),
    ]),
  ],
})
export class AppComponent {
  getId(outlet: RouterOutlet) {
    return outlet.activatedRouteData['id'];
  }
}
