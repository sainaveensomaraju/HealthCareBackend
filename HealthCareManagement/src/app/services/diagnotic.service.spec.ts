import { TestBed } from '@angular/core/testing';

import { DiagnoticService } from './diagnotic.service';

describe('DiagnoticService', () => {
  let service: DiagnoticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnoticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
