import { TileModel } from '../models/tile-model';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import TilesConfig from '../board.config.json'
import { TileType } from '../tile/tile-type.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public tiles: TileModel[][];
  constructor() {
    this.tiles = TilesConfig.board.map((row) => {
      return row.map((tile) => {
        return { type: tile as TileType} as TileModel
      }) as TileModel[]
    }) as TileModel[][];
  }

  ngOnInit(): void { 
  }

}
