import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const _modulesToExport = [
  CommonModule,
  //material
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [_modulesToExport],
  exports: _modulesToExport,
})
export class SharedModule {}
