import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  inputValue: number = 0;
  counterValue: number = this.inputValue;

  executeAction() {
    if (this.inputValue > this.counterValue) {
      this.counterValue += this.inputValue
    } else {
      this.counterValue -= this.inputValue
    }
  }

}
