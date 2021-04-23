import { LetterTransferService } from './../services/letter-transfer.service';
import { LetterModel } from './../models/letter-model';
import { TileModel } from '../models/tile-model';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import TilesConfig from '../board.config.json'
import Dictionary from '../../../assets/dictionary_compact.json'
import { TileType } from '../tile/tile-type.enum';
import { Point, moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import Position from '../models/interfaces/Position.type';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public tiles: TileModel[][];
  public placeholders: LetterModel[][][];
  public letters: LetterModel[];
  public currentWord: Position<LetterModel>[];

  constructor(private lss: LetterTransferService) {
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
  }

  checkWord = () => {
  }

  drop(event: CdkDragDrop<LetterModel[]>) {

    this.lss.drop(event);
  }
}
