import { TestBed } from '@angular/core/testing';

import { ShipperClientService } from './shipper-client.service';

describe('ShipperClientService', () => {
  let service: ShipperClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipperClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
