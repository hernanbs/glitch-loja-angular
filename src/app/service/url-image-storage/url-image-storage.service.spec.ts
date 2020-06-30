import { TestBed } from '@angular/core/testing';

import { UrlImageStorageService } from './url-image-storage.service';

describe('UrlImageStorageService', () => {
  let service: UrlImageStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlImageStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
