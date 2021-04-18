import { TestBed } from '@angular/core/testing';

import { LetterTransferService } from './letter-transfer.service';

describe('LetterTransferService', () => {
  let service: LetterTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetterTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
