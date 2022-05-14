import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner-tiles',
  templateUrl: './banner-tiles.component.html',
  styleUrls: ['./banner-tiles.component.scss']
})
export class BannerTilesComponent implements OnInit {
  @Input() games:any;
  @Output() bannerEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  changeBannerGame(id:number){
    this.bannerEvent.emit(id);
  }



}
