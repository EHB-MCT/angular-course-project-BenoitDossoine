import { GamesService } from './../../../services/games/games.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-tiles',
  templateUrl: './shop-tiles.component.html',
  styleUrls: ['./shop-tiles.component.scss']
})
export class ShopTilesComponent implements OnInit {
  @Input() category: any;
  public games:any;
  constructor(private gamesService:GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGamesByGenre(this.category).subscribe((data:any)=>{
      this.games = data;
    })
  }

}
