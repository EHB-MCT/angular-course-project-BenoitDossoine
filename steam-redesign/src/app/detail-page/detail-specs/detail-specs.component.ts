import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-specs',
  templateUrl: './detail-specs.component.html',
  styleUrls: ['./detail-specs.component.scss']
})
export class DetailSpecsComponent implements OnInit {

  @Input() game: any;
  constructor() { }

  ngOnInit(): void {
  }

}
