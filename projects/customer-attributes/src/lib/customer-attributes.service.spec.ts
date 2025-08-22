import { TestBed } from '@angular/core/testing';

import { CustomerAttributesService } from './customer-attributes.service';

describe('CustomerAttributesService', () => {
  let service: CustomerAttributesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAttributesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
