import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorsComponent } from "./directors.component"

const routes: Routes = [
  {
    path: '',
    component: DirectorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorsRoutingModule { }
