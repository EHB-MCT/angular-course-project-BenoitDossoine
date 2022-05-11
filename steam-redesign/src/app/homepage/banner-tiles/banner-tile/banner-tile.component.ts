import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-tile',
  templateUrl: './banner-tile.component.html',
  styleUrls: ['./banner-tile.component.scss']
})
export class BannerTileComponent implements OnInit {
  @Input() game:any;
  constructor() { }

  ngOnInit(): void {
  }

}
