import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinscrirePageRoutingModule } from './sinscrire-routing.module';

import { SinscrirePage } from './sinscrire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinscrirePageRoutingModule
  ],
  declarations: [SinscrirePage]
})
export class SinscrirePageModule {}
