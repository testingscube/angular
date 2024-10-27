import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;

  //after Angular-16
  private destroyRef = inject(DestroyRef);

  constructor() {} // only use for basic initilization

  // Although ngOnInit not need OnInit implementation you shold do it to avoid typo.
  ngOnInit() {
    // this.interval =
    const interval = setInterval(() => {
      const randomNumber = Math.random(); // 0 - 0.999999999999
      if (randomNumber < 0.5) this.currentStatus = 'online';
      else if (randomNumber < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);


    // This feature after angular 16, this will add an 
    // listener which will be executed on destroy of component.
    this.destroyRef.onDestroy(() => {
      clearTimeout(interval);
    });
  }

  // More latest way of doing this is provided by angular. 
  // Instead 
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }


}
