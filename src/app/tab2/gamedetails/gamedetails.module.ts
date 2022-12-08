import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamedetailsPageRoutingModule } from './gamedetails-routing.module';

import { GamedetailsPage } from './gamedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamedetailsPageRoutingModule
  ],
  declarations: [GamedetailsPage]
})
export class GamedetailsPageModule {}
