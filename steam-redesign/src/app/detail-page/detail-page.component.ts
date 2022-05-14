import { GamesService } from './../services/games/games.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit,AfterViewInit {
  public id:any;
  public game: any;
  public loading = true;
  constructor(private gamesService:GamesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.game = this.route.paramMap.pipe(
    //   switchMap((params:ParamMap)=>
    //     this.gamesService.getDetailPage(params.get('id')!))
    // )
    this.gamesService.getDetailPage(this.id).subscribe((data:any) =>{
      this.game = data;
    })
  }

  public ngAfterViewInit(){
    this.loading = false;
  }

}
