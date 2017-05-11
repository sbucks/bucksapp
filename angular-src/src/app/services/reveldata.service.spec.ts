import { TestBed, inject } from '@angular/core/testing';

import { ReveldataService } from './reveldata.service';

describe('ReveldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReveldataService]
    });
  });

  it('should ...', inject([ReveldataService], (service: ReveldataService) => {
    expect(service).toBeTruthy();
  }));
});
