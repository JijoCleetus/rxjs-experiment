import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit() {
    this.trigger();
  }

  ngAfterViewInit() {
    // this.trigger();
  }

  trigger() {
    let el = document.getElementById('my-element')
    let mouseMoves = fromEvent(el, 'mousemove');
    let subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      console.log(`Coords:${evt.clientX} X ${evt.clientY} `);

      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe()
      }
    })
  }


}
