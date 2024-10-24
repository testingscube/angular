import { Component, Input, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation:ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item'
  // }
  // adding :host selector in this.component.css file instead of .dashboard-item class name add :host
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;

  image = input.required<{src:string; alt:string}>();
  title = input.required<string>();
}
