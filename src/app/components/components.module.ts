import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"

import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoadingComponent,
    ErrorComponent
  ]
})
export class ComponentsModule { }
