import { PileComponent } from './pile/pile.component';
import { LetterComponent } from './letter/letter.component';
import { BoardComponent } from './board/board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HandComponent } from './hand/hand.component';
import { MessageComponent } from '../message/message.component';



@NgModule({
  declarations: [
    BoardComponent,
    TileComponent,
    LetterComponent,
    PileComponent,
    HandComponent,
    MessageComponent,],
  imports: [
    CommonModule,
    MatGridListModule,
    DragDropModule,
  ],
  exports: [
    BoardComponent,
    TileComponent,
    LetterComponent,
    PileComponent,
    HandComponent,
    MessageComponent
  ]
})
export class GameModule { }
