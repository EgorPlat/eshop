import { TestBed } from '@angular/core/testing';

import { MakelistService } from './makelist.service';

describe('MakelistService', () => {
  let service: MakelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
