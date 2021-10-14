import { TestBed } from '@angular/core/testing';

import { StockGuiServiceService } from './stock-gui-service.service';

describe('StockGuiServiceService', () => {
  let service: StockGuiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockGuiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
