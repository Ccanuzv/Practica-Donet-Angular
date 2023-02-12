import { TestBed } from '@angular/core/testing';

import { PalindromoService } from './palindromo.service';

describe('PalindromoService', () => {
  let service: PalindromoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalindromoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
