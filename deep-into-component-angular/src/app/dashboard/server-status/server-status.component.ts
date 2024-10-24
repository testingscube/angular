import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {} // only use for basic initilization


  // Although ngOnInit not need OnInit implementation you shold do it to avoid typo.
  ngOnInit() {
    setInterval(() => {
      const randomNumber = Math.random(); // 0 - 0.999999999999
      if (randomNumber < 0.5) this.currentStatus = 'online';
      else if (randomNumber < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);
  }
}
