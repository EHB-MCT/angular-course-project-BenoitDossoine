import { IGameDetails } from './../services/games/games.types';
import { GamesService } from './../services/games/games.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public featuredGames:any;
  public bannerGame:any;
  constructor(private gamesService:GamesService) {
    
   }

  public ngOnInit(): void {
    this.gamesService.getFeaturedGames().subscribe((data:any) =>{
      this.featuredGames = data;
      this.bannerGame = this.featuredGames[0];
    })
  }
}
