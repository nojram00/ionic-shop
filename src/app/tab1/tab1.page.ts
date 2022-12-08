import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StoreAPIService } from '../services/store-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
   }
  price: number = 1000;
  newGames: any[];
  games: any[];
  constructor(private route: ActivatedRoute, public navCtrl: NavController, public service: StoreAPIService) {
    this.games = this.service.getbyPricelist(this.price);
    console.log("Lower Pricelist" + this.games);

    this.newGames = this.service.getByReleasedate();
  }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.option;
  }

}
