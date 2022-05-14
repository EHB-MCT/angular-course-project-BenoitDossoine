import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() game:any;
  constructor(private route:Router) {}

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.game.description = this.game.description.substring(0,200)+'...'; 
  }

  toDetailPage(id:number){
    this.route.navigate(['/detailpage',id])
  }

}
