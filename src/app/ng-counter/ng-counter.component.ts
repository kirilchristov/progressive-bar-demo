import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../ngrxcounter.actions';

@Component({
  selector: 'app-ng-counter',
  templateUrl: './ng-counter.component.html',
  styleUrls: ['./ng-counter.component.scss']
})
export class NgCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ ngrxCount: number }>) {
    this.count$ = store.select('ngrxCount');
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}

