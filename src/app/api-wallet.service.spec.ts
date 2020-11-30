import { TestBed } from '@angular/core/testing';

import { ApiWalletService } from './api-wallet.service';

describe('ApiWalletService', () => {
  let service: ApiWalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
