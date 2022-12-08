import { TestBed } from '@angular/core/testing';

import { StoreAPIService } from './store-api.service';

describe('StoreAPIService', () => {
  let service: StoreAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
