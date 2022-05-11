import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-tiles',
  templateUrl: './banner-tiles.component.html',
  styleUrls: ['./banner-tiles.component.scss']
})
export class BannerTilesComponent implements OnInit {
  @Input() games:any;
  constructor() { }

  ngOnInit(): void {
  }

}
