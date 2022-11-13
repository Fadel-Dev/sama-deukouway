import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinscrirePage } from './sinscrire.page';

const routes: Routes = [
  {
    path: '',
    component: SinscrirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinscrirePageRoutingModule {}
