import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true, // Marks the component as standalone
  providers: [DataService]  // Optional: providers can be set here if needed
})
export class HomeComponent implements OnDestroy {
  private dataSubscription: Subscription;
  public currentData: number=0;

  constructor(private dataService: DataService) {
    console.log("I am called From constructor successfully!");
    // Subscribe to the data observable in the constructor
    this.dataSubscription = this.dataService.getData().subscribe(
      (data) => {
        this.currentData = data;
        console.log('Data received:', data);
      },
      (error) => {
        console.error('Error receiving data:', error);
      }
    );
  }

  // Cleanup: Unsubscribe when the component is destroyed
  ngOnDestroy(): void {
    console.log("I am called And executed successfully!");
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      console.log("I am called And unsubscribed successfully!");
    }
  }
}
