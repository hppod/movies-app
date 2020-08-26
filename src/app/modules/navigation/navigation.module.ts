import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**Importações do Material */
import { MatToolbarModule } from "@angular/material/toolbar"

import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
