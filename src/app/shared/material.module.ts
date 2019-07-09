import { NgModule } from '@angular/core';

import { MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
  ]
})

export class MaterialModule { }
