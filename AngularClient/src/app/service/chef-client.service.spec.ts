import { TestBed } from '@angular/core/testing';

import { ChefClientService } from './chef-client.service';

describe('ChefClientService', () => {
  let service: ChefClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
