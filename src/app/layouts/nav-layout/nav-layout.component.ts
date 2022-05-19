import { trigger, transition } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forward, backward } from 'src/app/shared';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnimation', [
      transition('3 => 4', forward()),
      transition('4 => 3', backward()),
    ]),
  ],
})
export class NavLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getId(outlet: RouterOutlet) {
    return outlet.activatedRouteData['id'];
  }
}
