import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor() { }
  secondsCounter = interval(1000);
  ngOnInit() {
    this.callEvent();
  }
  callEvent() {
    this.secondsCounter.subscribe(n => {
      console.log(`${n}`);
    })
  }
}
