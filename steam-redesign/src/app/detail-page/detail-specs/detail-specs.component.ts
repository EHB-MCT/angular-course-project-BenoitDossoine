import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-detail-specs',
  templateUrl: './detail-specs.component.html',
  styleUrls: ['./detail-specs.component.scss']
})
export class DetailSpecsComponent implements OnInit {

  @Input() game: any;
  private requirements: any;
  public recommended: any;
  public ratings: any;

  public descriptionShown = true;
  public requirementsShown = false;
  public reviewsShown = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.requirements = this.game.platforms[0].requirements;
    if(this.requirements.recommended == null){
      this.recommended = "No requirements found for this game"
    } else {
      
      this.recommended = this.requirements.recommended;
    }

    this.ratings = this.game.ratings.sort((a:any,b:any)=>b.id - a.id);
    this.ratings.forEach( (rating:any)=> rating.id =parseInt(rating.id));
  
    console.log(this.ratings);
  }

  showDescription(){
    document.getElementById("descriptionBtn")?.classList.add('active');
    document.getElementById("requirementsBtn")?.classList.remove('active');
    document.getElementById("reviewBtn")?.classList.remove('active');

    this.descriptionShown = true;
    this.requirementsShown = false;
    this.reviewsShown = false;
  }

  showRequirements(){
    document.getElementById("descriptionBtn")?.classList.remove('active');
    document.getElementById("requirementsBtn")?.classList.add('active');
    document.getElementById("reviewBtn")?.classList.remove('active');

    this.descriptionShown = false;
    this.requirementsShown = true;
    this.reviewsShown = false;
  }
  showReviews(){
    document.getElementById("descriptionBtn")?.classList.remove('active');
    document.getElementById("requirementsBtn")?.classList.remove('active');
    document.getElementById("reviewBtn")?.classList.add('active');

    this.descriptionShown = false;
    this.requirementsShown = false;
    this.reviewsShown = true;
  }

  numSequence(x:number):Array<number>{
    return Array(x);
  }

}
