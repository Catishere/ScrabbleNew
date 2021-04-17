import { TileType } from './tile-type.enum';
import { TileModel } from '../models/tile-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input()
  tile!: TileModel;
  constructor() {
  }

  ngOnInit(): void {
    if (this.tile)
      this.tile.displayString = this.getDisplayString(this.tile.type);
  }

  private getDisplayString = (type: TileType) => {
    switch (type) {
      case TileType.DL:
        return "Double Letter";
      case TileType.DW:
        return "Double Word";
      case TileType.TL:
        return "Triple Letter";
      case TileType.TW:
        return "Triple Word";
      case TileType.NM:
        return "";
    }
  }

}
