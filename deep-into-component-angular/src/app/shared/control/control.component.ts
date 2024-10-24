import { Component, HostBinding, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css', 
  encapsulation: ViewEncapsulation.None,
  host:{
    class:"control"
  }
})
export class ControlComponent {
  //@HostBinding() -- is just for backward compatiblity suggested to use in decorator. 
  // @HostBinding() class='control';      // class as binding name is working
  // @HostBinding() className= 'control'; // className is also working
  // @HostBinding() name = 'control';     // name is not working
  // @HostBinding('class') name = 'control'; // With ('class') paramenter to HostBinding, name is also working.
  
  
  label = input.required<string>();

}
