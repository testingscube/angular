import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-subscription-demo';

  showHome = true;

  toggleHome() {
    this.showHome = !this.showHome;  // Toggle to add or remove HomeComponent
  }
}
