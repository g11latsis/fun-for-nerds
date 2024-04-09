import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  @Output() inputChange = new EventEmitter<string>();
  @Output() submit = new EventEmitter<string>();

  inputValue: string = '';

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputChange.emit(value);
    this.inputValue = (event.target as HTMLInputElement).value;
    this.inputValue = value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submit.emit(this.inputValue);
    // this.inputValue = '';
  }
}
