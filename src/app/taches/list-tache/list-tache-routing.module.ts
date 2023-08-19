import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTachePage } from './list-tache.page';

const routes: Routes = [
  {
    path: '',
    component: AddTachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTachePageRoutingModule {}
