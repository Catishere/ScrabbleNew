import { LetterTransferService } from './../services/letter-transfer.service';
import { LetterModel } from './../models/letter-model';
import { transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import PileConfig from './pile.config.json'

@Component({
  selector: 'app-pile',
  templateUrl: './pile.component.html',
  styleUrls: ['./pile.component.scss']
})
export class PileComponent implements OnInit {

  public letters: LetterModel[];

  constructor(private lss: LetterTransferService) {
    this.letters = [];
    PileConfig.letters.forEach((letter) => {
      for (let i = 0; i < letter.count; i++) {
        this.letters.push({letter: letter.letter, points: 0})
      }
    });
    this.letters.forEach((letter) => {
      const p = PileConfig.points.find((l) => l.letter == letter.letter)?.points;
      if (p)
        letter.points = p; 
    })
    this.shuffleArray(this.letters);

  }

  shuffleArray = (array: LetterModel[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  ngOnInit(): void {
    this.lss.letterDeclineEmitter.subscribe((letter) => {
      this.letters.push(letter);
    })
  }

  addLetter = () => {
    if (this.letters.length > 0)
      this.lss.letterEmitter.emit(this.letters.pop());
  }

}
