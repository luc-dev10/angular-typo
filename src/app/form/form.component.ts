import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // define state
  characters: string = 'Hello Darkness My Old Friend';
  anwser: string = '';
  areCharMatching: boolean = false;
  userInputAccepted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // method to calculate answer
  anwserOnChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.anwser = inputElement.value;

    if (this.anwser == null || this.anwser == '' || this.anwser.length == 0) {
      this.userInputAccepted = false;
      return;
    } else {
      this.userInputAccepted = true;
    }

    // check if both strings are the same
    for (let i: number = 0; i < this.anwser.length; i++)
      if (i > this.characters.length) {
        this.areCharMatching = false;
        return;
      } else if (this.anwser[i] == this.characters[i]) {
        this.areCharMatching = true;
      } else {
        this.areCharMatching = false;
        return;
      }
  }
}
