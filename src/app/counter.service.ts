import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInActiveCounter = 0;
  inActiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInActiveCounter++;
    console.log('Active To Inactive: ' + this.activeToInActiveCounter);
  }

  incrementInActiveToActive() {
    this.inActiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inActiveToActiveCounter);
  }
}
