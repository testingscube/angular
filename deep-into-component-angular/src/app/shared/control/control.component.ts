import { Component, ElementRef, HostBinding, HostListener, ViewEncapsulation, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css', 
  encapsulation: ViewEncapsulation.None,
  host:{
    class:"control",
    '(click)':'onClick()'
  }
})
export class ControlComponent {
  //@HostBinding() -- is just for backward compatiblity suggested to use in decorator. 
  // @HostBinding() class='control';      // class as binding name is working
  // @HostBinding() className= 'control'; // className is also working
  // @HostBinding() name = 'control';     // name is not working
  // @HostBinding('class') name = 'control'; // With ('class') paramenter to HostBinding, name is also working.
  

  // Angular suggest to use click in the @Component decorator rather than with @HostListner
  // @HostListener('click') 
  // onClick(){
  //   alert("Clicked!");
  // }

  private el = inject(ElementRef);  // this will provide programatically access to the host element. 
  onClick(){
    console.log("Clicked!");
    // console.log(this.el);       // the complete host element is present and one can modify it progamatically but not suggest. 
  }
  

  label = input.required<string>();

}
