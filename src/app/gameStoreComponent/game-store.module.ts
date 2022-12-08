import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GameStorecompComponent } from './game-storecomp/game-storecomp.component';
// import { Tab2PageRoutingModule } from '../tab2/tab2-routing.module';
// import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';



@NgModule({
  declarations: [GameStorecompComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[GameStorecompComponent]
})
export class GameStoreModule { }
