import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectorDetailComponent } from './director-detail/director-detail.component';

import { DirectorsComponent } from "./directors.component"

const routes: Routes = [
  {
    path: '',
    component: DirectorsComponent
  },
  {
    path: 'detail/:directorName',
    component: DirectorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorsRoutingModule { }
