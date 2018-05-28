import { TestBed, inject } from '@angular/core/testing';

import { AssessServiceService } from './assess-service.service';

describe('AssessServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessServiceService]
    });
  });

  it('should be created', inject([AssessServiceService], (service: AssessServiceService) => {
    expect(service).toBeTruthy();
  }));
});
