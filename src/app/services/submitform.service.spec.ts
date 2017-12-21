import { TestBed, inject } from '@angular/core/testing';

import { SubmitformService } from './submitform.service';

describe('SubmitformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmitformService]
    });
  });

  it('should be created', inject([SubmitformService], (service: SubmitformService) => {
    expect(service).toBeTruthy();
  }));
});
