import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop-tile',
  templateUrl: './shop-tile.component.html',
  styleUrls: ['./shop-tile.component.scss']
})
export class ShopTileComponent implements OnInit {

  public heartClicked = false;
  public cartClicked = false;
  @Input() game:any;
  constructor() { }

  ngOnInit(): void {

  }

  onHeartClick(){
    console.log("clicked!")
    this.heartClicked = !this.heartClicked;
  }

  onCartClick(){
    this.cartClicked = !this.cartClicked;
  }

}
