import { LetterModel } from './../models/letter-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  @Input()
  public letter!: LetterModel;

  constructor() { }

  ngOnInit(): void {
  }

}
