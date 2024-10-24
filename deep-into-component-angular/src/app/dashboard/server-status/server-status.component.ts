import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    setInterval(() => {
      const randomNumber = Math.random(); // 0 - 0.999999999999
      if (randomNumber < 0.5) this.currentStatus = 'online';
      else if (randomNumber < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);
  }
}
