import { Component } from '@angular/core';

@Component({
  // selector: 'app-button',  -- this would wrap the content will not extend the button
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
