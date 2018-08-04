import { TestBed, inject } from '@angular/core/testing';

import { VvService } from './vv.service';

describe('VvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VvService]
    });
  });

  it('should be created', inject([VvService], (service: VvService) => {
    expect(service).toBeTruthy();
  }));
});
