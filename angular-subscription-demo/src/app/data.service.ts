import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Service provided at the root level
})
export class DataService {
  private dataSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.startEmittingData();
  }

  // Simulate data emission every second
  private startEmittingData(): void {
    let counter = 0;
    setInterval(() => {
      this.dataSubject.next(counter++);
    }, 1000);
  }

  // Expose the observable for subscription
  getData(): Observable<number> {
    return this.dataSubject.asObservable();
  }
}
