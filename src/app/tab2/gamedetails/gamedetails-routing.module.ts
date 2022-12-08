import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamedetailsPage } from './gamedetails.page';

const routes: Routes = [
  {
    path: '',
    component: GamedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamedetailsPageRoutingModule {}
