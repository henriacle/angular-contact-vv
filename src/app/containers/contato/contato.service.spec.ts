import { TestBed, inject } from '@angular/core/testing';

import { ContatoService } from '@app/containers/contato/contato.service';

describe('ContatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoService]
    });
  });

  it('should be created', inject([ContatoService], (service: ContatoService) => {
    expect(service).toBeTruthy();
  }));
});
