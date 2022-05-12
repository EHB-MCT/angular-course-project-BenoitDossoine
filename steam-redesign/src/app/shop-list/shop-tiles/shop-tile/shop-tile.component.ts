import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop-tile',
  templateUrl: './shop-tile.component.html',
  styleUrls: ['./shop-tile.component.scss']
})
export class ShopTileComponent implements OnInit {
  @Input() game:any;
  constructor() { }

  ngOnInit(): void {
  }

}
