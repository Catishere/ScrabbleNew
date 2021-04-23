import { CdkDragDrop, moveItemInArray, transferArrayItem, Point } from '@angular/cdk/drag-drop';
import { EventEmitter, Injectable } from '@angular/core';
import { LetterModel } from '../models/letter-model';

@Injectable({
  providedIn: 'root'
})
export class LetterTransferService {

  public letterEmitter = new EventEmitter<LetterModel>();
  public letterDeclineEmitter = new EventEmitter<LetterModel>();
  public letterToHandEmitter = new EventEmitter<String>();

  constructor() { } 
  
  public listIdToPosition = (listId: String) => {
    const id: number = parseInt(listId.split("-")[3]) - 1;
    return {x: Math.floor(id / 15), y: id % 15 };
  }

  public drop = (event: CdkDragDrop<LetterModel[]>) => {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.id != "cdk-drop-list-0"
          && event.container.data.length == 1) {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          0,
                          0);

        transferArrayItem(event.container.data,
                          event.previousContainer.data,
                          1,
                          0);
      } else {
        this.letterToHandEmitter.emit(event.previousContainer.id);
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }
}
