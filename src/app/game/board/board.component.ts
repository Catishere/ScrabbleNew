import { LetterTransferService } from './../services/letter-transfer.service';
import { LetterModel } from './../models/letter-model';
import { TileModel } from '../models/tile-model';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import TilesConfig from '../board.config.json'
import Dictionary from '../../../assets/words.json';
import { TileType } from '../tile/tile-type.enum';
import { Point, moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public tiles: TileModel[][];
  public placeholders: LetterModel[][][];
  public letters: LetterModel[];
  public currentWord: Point[];
  public correct: boolean;

  constructor(private lss: LetterTransferService) {
    this.correct = false;
    this.letters = [];
    this.placeholders = [];
    this.currentWord = [];

    for (let i = 0; i < 15; i++) {
      this.placeholders[i] = [];
      for (let j = 0; j < 15; j++) {
        this.placeholders[i][j] = [];
      }
    }
    
    this.tiles = TilesConfig.board.map((row, i) => {
      return row.map((tile, j) => {
        return { type: tile as TileType, pos: {x: i, y: j}} as TileModel
      }) as TileModel[]
    }) as TileModel[][];
  }

  ngOnInit(): void {
    this.lss.letterToHandEmitter.subscribe((id) => {
      this.currentWord = this.currentWord.filter((letter) => {
        return JSON.stringify(this.lss.listIdToPosition(id)) != JSON.stringify(letter);
      });
    })
  }

  checkWord = () => {
    let isHorizontal = true;
    let isVertical = true;

    const first = this.currentWord[0];
    this.currentWord.forEach((letter) => {
      if (letter.x != first.x)
        isHorizontal = false;
      if (letter.y != first.y)
        isVertical = false;
    });

    let word: string = "";
    this.currentWord.sort((a, b) => {
      if (isVertical)
        return a.x - a.x;
      else if (isHorizontal)
        return a.y - b.y;
      else
        return 0;
    });

    this.currentWord.forEach((letterpos) => word = word + this.placeholders[letterpos.x][letterpos.y][0].letter);
    word = word.toLowerCase();

    this.correct = (isHorizontal || isVertical) && Dictionary.words.includes(word);
  }

  drop(event: CdkDragDrop<LetterModel[]>, x: number, y: number) {
    if (event.container.data.length == 0) {
      const pos = this.lss.listIdToPosition(event.previousContainer.id);
      this.currentWord = this.currentWord.filter((letter) => {
        return JSON.stringify(letter) != JSON.stringify(pos);
      });
  
      this.currentWord.push({x, y});
    }

    this.lss.drop(event);
  }  
}
