import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishHousePage } from './publish-house.page';

const routes: Routes = [
  {
    path: '',
    component: PublishHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishHousePageRoutingModule {}
