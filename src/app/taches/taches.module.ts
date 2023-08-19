import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TachesPageRoutingModule } from './taches-routing.module';

import { TachesPage } from './taches.page';
import { TachesItemComponent } from './taches-item/taches-item.component';
import { AddTachePage } from './list-tache/list-tache.page';
import { FormTacheComponent } from './form-tache/form-tache.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TachesPageRoutingModule
  ],
  declarations: [TachesPage, AddTachePage,TachesItemComponent, FormTacheComponent]
})
export class TachesPageModule {}
