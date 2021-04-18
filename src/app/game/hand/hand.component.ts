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
    this.testletters.push({letter: "B", points: 2});
    this.testletters.push({letter: "A", points: 1});
    this.testletters.push({letter: "Q", points: 8});
  }

  drop(event: CdkDragDrop<LetterModel[]>) {
    this.lss.drop(event);
  }

}
