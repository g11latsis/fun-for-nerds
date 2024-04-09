import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-odd-length-words',
  standalone: true,
  imports: [],
  templateUrl: './odd-length-words.component.html',
  styleUrl: './odd-length-words.component.css'
})
export class OddLengthWordsComponent {
  @Input() inputValue: string;
  @Input() oddLengthWords: string[];
}
