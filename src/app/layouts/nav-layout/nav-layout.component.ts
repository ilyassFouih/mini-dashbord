import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-layout',
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
