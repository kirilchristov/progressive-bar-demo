import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-pro-bar',
  templateUrl: './pro-bar.component.html',
  styleUrls: ['./pro-bar.component.scss']
})
export class ProBarComponent implements OnInit {

  progress = 0;

  ngOnInit() {
    const interval$: Observable<number> = interval(1);

    interval$.pipe(
      take(101),
      map(progress => {
        // console.log('Progress', progress);
        this.progress = progress
      })
    ).subscribe()
  }

}
