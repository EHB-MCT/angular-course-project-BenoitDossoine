import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  public categories: Array<string> = ['action', 'adventure', 'indie','strategy','shooter','casual','simulation','puzzle','arcade','platformer'];
  constructor() { }

  ngOnInit(): void {
    this.categories = this.categories.sort(()=>0.5-Math.random());
    console.log(this.categories);
  }

}
