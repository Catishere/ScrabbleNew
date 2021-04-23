import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventEmitter, Injectable } from '@angular/core';
import { LetterModel } from '../models/letter-model';

@Injectable({
  providedIn: 'root'
})
export class LetterTransferService {

  public letterEmitter = new EventEmitter<LetterModel>();
  public letterDeclineEmitter = new EventEmitter<LetterModel>();

  constructor() { } 

  public drop = (event: CdkDragDrop<LetterModel[]>) => {
    console.log(event.container.id);
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
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
    }
  }
}
