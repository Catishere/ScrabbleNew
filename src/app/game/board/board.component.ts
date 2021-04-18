import { LetterTransferService } from './../services/letter-transfer.service';
import { LetterModel } from './../models/letter-model';
import { TileModel } from '../models/tile-model';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import TilesConfig from '../board.config.json'
import { TileType } from '../tile/tile-type.enum';
import { Point, moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public tiles: TileModel[][];
  public letters: LetterModel[];
  public selectedTile: Point;

  constructor(private lss: LetterTransferService) {
    this.letters = [];
    this.selectedTile = {x: 0, y: 0};
    this.tiles = TilesConfig.board.map((row, i) => {
      return row.map((tile, j) => {
        return { type: tile as TileType, pos: {x: i, y: j}} as TileModel
      }) as TileModel[]
    }) as TileModel[][];
  }

  ngOnInit(): void { 
    this.letters.push({letter: "B", points: 2});
    this.letters.push({letter: "A", points: 1});
    this.letters.push({letter: "Q", points: 8});
    this.letters.push({letter: "Q", points: 8});
    this.letters.push({letter: "Q", points: 8});
    this.letters.push({letter: "Q", points: 8});
  }

  drop(event: CdkDragDrop<LetterModel[]>) {
    this.lss.drop(event);
  }
}
