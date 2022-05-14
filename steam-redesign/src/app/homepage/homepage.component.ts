import { IGameDetails } from './../services/games/games.types';
import { GamesService } from './../services/games/games.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,AfterViewInit {

  public featuredGames:any;
  public bannerGame:any;
  public loading = true;
  constructor(private gamesService:GamesService) {
    
   }

  public ngOnInit(): void {
    this.gamesService.getFeaturedGames().subscribe((data:any) =>{
      this.featuredGames = data;
      this.bannerGame = this.featuredGames[0];
    })
  }

  public ngAfterViewInit(){
    this.loading = false;
  }

  changeBannerGame(i:number){
    this.bannerGame=this.featuredGames[i];
  }
}
