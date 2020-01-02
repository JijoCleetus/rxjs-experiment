import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  data = from(fetch('http://dummy.restapiexample.com/api/v1/employees'));
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data.subscribe({
      next(response) { console.log(response) },
      error(err) { console.log(err) },
      complete() { console.log("completed") }
    })
  }


}
