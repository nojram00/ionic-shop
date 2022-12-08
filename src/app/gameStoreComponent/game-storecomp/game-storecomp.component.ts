import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreAPIService } from 'src/app/services/store-api.service';

@Component({
  selector: 'app-game-storecomp',
  templateUrl: './game-storecomp.component.html',
  styleUrls: ['./game-storecomp.component.scss'],
})
export class GameStorecompComponent implements OnInit {

  @Input() game: any;
  // @Input() games: any[];
  constructor(private route: ActivatedRoute ,public service: StoreAPIService) { }

  ngOnInit() {
    // this.games = this.service.getallLists();
  }

}
