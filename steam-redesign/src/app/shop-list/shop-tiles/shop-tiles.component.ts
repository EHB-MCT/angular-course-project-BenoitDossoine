import { GamesService } from './../../services/games/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-tiles',
  templateUrl: './shop-tiles.component.html',
  styleUrls: ['./shop-tiles.component.scss']
})
export class ShopTilesComponent implements OnInit {
  public games:any;
  constructor(private gamesService:GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGamesByGenre().subscribe((data:any)=>{
      this.games = data;
    })
  }

}
