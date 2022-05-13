import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent implements OnInit {
  @Input() game:any;
  constructor() { }

  ngOnInit(): void {
  }

}
