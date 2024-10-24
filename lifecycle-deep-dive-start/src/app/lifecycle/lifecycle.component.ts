import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  /***
   * Standard Java Script Feature
   * Basic class initilization thats it.
   */
  constructor() {
    console.log('CONSTRUCTOR');
  }


  /**
   * After the constructor is called then ngOnInit is called, so to be used for calling or
   * performing complex calculations and works. 
   */
  ngOnInit() {
    console.log('ngOnInit');
  }

  /**
   * This hook is called whenever @Input() text changes, on or many Input recieved changes.
   * SimpleChanges object will contain whall all changed from to.  
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  /**
   * Any change on whole UI and not only on component, this is called. 
   */
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  /**
   * the "Content" is some other (partial) view data structure projected into this compeneont's view
   * 
   * Any thing projected as content (ng-content) into the view is content
   */
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  /***
   * technically "VIEW" is an internally manage data structure which holds references to the DOM elements e
   * rendered by a component. 
   * 
   * View is the template file of this component.
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }


  /**
   * This would be executed before component id distroyed.
   * 
   * This is called in this app as this componenent is rendered conditionally
   * and when the condition is removed the component is distroyed calling this mehtod. 
   * */ 
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
