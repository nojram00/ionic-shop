import { Injectable } from '@angular/core';
import { platform } from 'os';

@Injectable({
  providedIn: 'root'
})
export class StoreAPIService {

  gameList: any[] = [
      {id: '1', name: 'God of War: Ragnarok', price: '2500', imageURI:'../assets/imageData/GOW_cover.jpg', platforms:['Playstation 4', 'Playstation 5'], date: '11-09-2022', year: '2022', onCart: true, 
        description: 'Kratos must decide whether he will be chained by the fear of repeating his mistakes or break free of his past to be the father Atreus needs.'},
      {id: '2', name: 'Pokemon Scarlet', price: '1500', imageURI: '../assets/imageData/pokemonscarlet.jpg', platforms:['Nintendo Switch'], date: '11-18-2022', year: '2022', onCart: false,
        description: 'Catch never-before-seen Pokemon and explore a brand new region created playable with new open-world gameplay in Pokemon Scarlet and Pokemon Violet! Brand new Pokemon populate this world -- who will be your new starter partner: Sprigatito, Fuecoco, or Quaxly?'},
      {id: '3', name: 'Pokemon Violet', price: '1500', imageURI: '../assets/imageData/pokemonviolet.jpg ', platforms:['Nintendo Switch'], date: '11-18-2022', year: '2022' ,onCart: true,
        description: 'Catch never-before-seen Pokemon and explore a brand new region created playable with new open-world gameplay in Pokemon Scarlet and Pokemon Violet! Brand new Pokemon populate this world -- who will be your new starter partner: Sprigatito, Fuecoco, or Quaxly?'},
      {id: '4', name: 'Resident Evil: Village', price: '1200', imageURI: '../assets/imageData/Resident_Evil_Village.png', platforms:['Playstation 4', 'Playstation 5', 'Xbox Series X/S', 'Xbox 360 '], date: '03-07-2021', year:'2021', onCart: false,
        description: 'No description available at this time.'},
      {id: '5', name: "Assassin's Creed: Vallhala", price: '1000', imageURI: '../assets/imageData/AssassinsCreedValhalla_cover.jpg', platforms:['Playstation 4', 'Playstation 5'], date: '11-10-2020', year: '2020', onCart: false,
        description: "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey. Principally set in the years 872–878 AD, the game recounts a fictional story during the Viking expansions into the British Isles. Players control Eivor Varinsdottir, a Viking raider who, while attempting to establish a new Viking clan in England, becomes embroiled in the centuries-old conflict between the Assassin Brotherhood, who fight for peace and liberty, and the Templar Order, who desire peace through control. The game also includes a framing story, set in the 21st century, which follows Layla Hassan, an Assassin who relives Eivor's memories so as to find a way to save the Earth from destruction."},
  ];
  constructor() { }

  getallLists(){
    return this.gameList;
  }
  getIndividualGame(id: any){
    const product = this.gameList.find(x => x.id == id);

    return product;
  }
  getbyPricelist(price: number){
    let products: any[] = [];
    products = this.gameList.filter(x => x.price <= price);
    return products;
  }
  // getbyPlatforms(platforms: string[]){
  //   let products: any[] = [];
  //   products = this.gameList.filter(x => x.platforms == platforms);
  //   console.log("Testing " + products.toString());
  //   return products;
  // }

  getbyPlatforms(Platforms: string[]){
    // const Platforms = ['Playstation 5'];
    const filterByPlatforms = new Set(Platforms);
    let products: any[] = [];
    products = this.gameList.filter(x => x.platforms.some((platform: any) => filterByPlatforms.has(platform)));
    console.log("Testing " + JSON.stringify(products));
    return products;
  }
  getByReleasedate(){
    let products: any[] = [];
    products = this.gameList.filter(x => x.year == '2022');
    console.log("Release date: " + JSON.stringify(products));
    return products;
  }

  addedtocart(){
    let products: any[] = [];
    products = this.gameList.filter(x => x.onCart == true);
    console.log("Added to cart: " + JSON.stringify(products));
    return products;
  }
}
