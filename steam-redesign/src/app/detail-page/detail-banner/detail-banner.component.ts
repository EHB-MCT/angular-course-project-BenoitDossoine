import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-detail-banner',
  templateUrl: './detail-banner.component.html',
  styleUrls: ['./detail-banner.component.scss']
})
export class DetailBannerComponent implements OnInit {
  @Input() game:any
  public rating  ="No review yet";
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges():void{
    this.defineRating(this.game.rating)
  }

  public defineRating(rating:number){
    console.log("hello");
    if(rating>4.5){
      this.rating = "Overwhelmingly positive";
    } else if(rating>4){
      this.rating = "Very positive";
    } else if(rating>3.5){
      this.rating = "Mostly positive";
    } else if(rating>3){
      this.rating = "Positive";
    } else if(rating>2){
      this.rating = "Mixed"
    } else if(rating>1){
      this.rating = "Negative";
    } else if(rating>=0){
      this.rating = "Overwhelmingly negative";
    } else {
      this.rating = "No reviews yet";
    }
  }

}
