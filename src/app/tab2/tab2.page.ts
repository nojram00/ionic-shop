import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StoreAPIService } from '../services/store-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ps5Games: any[];
  nintendoswitchGames: any[];
  games: any[];
  constructor(private route: ActivatedRoute, public navCtrl: NavController, public service: StoreAPIService) {
    this.games = this.service.getallLists();
    console.log("All lists: " + JSON.stringify(this.games));

    this.ps5Games = this.service.getbyPlatforms(['Playstation 5']);
    console.log("PS5Games: " + JSON.stringify(this.ps5Games));

    this.nintendoswitchGames = this.service.getbyPlatforms(['Nintendo Switch']);
    console.log("Nintendo Switch: " + JSON.stringify(this.nintendoswitchGames));
    
  }

}
