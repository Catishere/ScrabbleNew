import { LetterTransferService } from './../services/letter-transfer.service';
import { LetterModel } from './../models/letter-model';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  public testletters: LetterModel[];

  constructor(private lss: LetterTransferService) {
    this.testletters = [];
  }

  ngOnInit(): void {
    this.lss.letterEmitter.subscribe((letter) => {
      if (this.testletters.length >= 7)
        this.lss.letterDeclineEmitter.emit(letter);
      else
        this.testletters.push(letter);
    })
  }

  drop(event: CdkDragDrop<LetterModel[]>) {
    this.lss.drop(event);
  }
}
