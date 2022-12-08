import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreAPIService } from '../services/store-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  games: any[];
  constructor(private route: ActivatedRoute, private service: StoreAPIService) {}

  ngOnInit(){
    this.games = this.service.addedtocart();
  }
}
