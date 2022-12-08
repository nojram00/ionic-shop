import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, NavController } from '@ionic/angular';
import { StoreAPIService } from 'src/app/services/store-api.service';
import { Location } from '@angular/common';
import { url } from 'inspector';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.page.html',
  styleUrls: ['./gamedetails.page.scss'],
})
export class GamedetailsPage implements OnInit {

  game: any;
  constructor(private route:ActivatedRoute, public service:StoreAPIService, public navCtrl: NavController, private location: Location, public anim: AnimationController) { 

  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.game = this.service.getIndividualGame(id);
    console.log("Product: " + JSON.stringify(this.game));
  }
  onClick(){
    this.navCtrl.back();
  }
  back(){
    this.location.back();
    // this.anim.create();
  }
}
