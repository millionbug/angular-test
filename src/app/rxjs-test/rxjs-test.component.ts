import { Component, OnInit } from '@angular/core';
import { concat, Observable, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styleUrls: ['./rxjs-test.component.scss']
})
export class RxjsTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let one = 0;
    let two = 10;
    concat(
      interval(2000).pipe(
        take(6),
        map(x => {
          return two + x;
        }),
      ),
      interval(1000).pipe(
        take(6),
        map(x => {
          return x;
        }),
      )
    )
    // .subscribe(value => {
    //   console.log(value);
    // }) // 10 11 12 13 14 15 0 1 2 3 4 5

    merge(
      interval(2000).pipe(
        take(6),
        map(x => {
          return two + x;
        }),
      ),
      interval(1000).pipe(
        take(6),
        map(x => {
          return x;
        }),
      )
    )
    // .subscribe(value => {
    //   console.log(value);
    // }) // 0 10 1 2 11 3 4 12 5 13 14 15

  }

}
