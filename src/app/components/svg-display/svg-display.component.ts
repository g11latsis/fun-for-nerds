import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-svg-display',
  standalone: true,
  imports: [],
  templateUrl: './svg-display.component.html',
  styleUrl: './svg-display.component.css'
})
export class SvgDisplayComponent {
  @Input() evenValue: string;
  @Input() oddValue: string;

}
