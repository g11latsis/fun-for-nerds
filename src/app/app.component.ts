import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './components/text-input/text-input.component';
import { EvenLengthWordsComponent } from './components/even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './components/odd-length-words/odd-length-words.component';
import { SvgDisplayComponent } from './components/svg-display/svg-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextInputComponent,EvenLengthWordsComponent,OddLengthWordsComponent,SvgDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fun for nerds!';

  evenValue: string = '';
  oddValue: string = '';

  evenLengthWords: string[] = []; 
  oddLengthWords: string[] = [];

  onInputChange(value: string) {
    if(value.length === 0){
      this.evenValue = '';
      this.oddValue = '';
    } else if(this.isEven(value)){
      this.evenValue = value;
      this.oddValue = 'No odd length words!';
    } else if(this.isOdd(value)){
      this.oddValue = value;
      this.evenValue = 'No even length words!';
    }
  }

  onSubmit(value: string) {
    if(this.isEven(value)){
      this.evenLengthWords.push(value);
      // console.log(this.evenLengthWords)
    } else if(this.isOdd(value)){
      this.oddLengthWords.push(value);
      // console.log(this.oddLengthWords)
    }
  }

  isEven(value: string) {
    return value.length % 2 === 0;
  }

  isOdd(value: string) {
    return value.length % 2 !== 0;
  }

}
