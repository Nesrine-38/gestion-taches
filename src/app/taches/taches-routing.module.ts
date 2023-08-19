import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TachesPage } from './taches.page';

const routes: Routes = [
  {
    path: '',
    component: TachesPage
  },
  {
    path: ':tacheId',
    loadChildren: () => import('./list-tache/list-tache.module').then( m => m.AddTachePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TachesPageRoutingModule {}
