import { LetterModel } from './../models/letter-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  public testletter: LetterModel;
  constructor() {
    this.testletter = new LetterModel();
  }

  ngOnInit(): void {
    this.testletter.letter = "B";
    this.testletter.points = 2;
  }

}
