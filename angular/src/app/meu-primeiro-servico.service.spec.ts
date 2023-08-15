import { TestBed } from '@angular/core/testing';

import { MeuPrimeiroServicoService } from './meu-primeiro-servico.service';

describe('MeuPrimeiroServicoService', () => {
  let service: MeuPrimeiroServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuPrimeiroServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
