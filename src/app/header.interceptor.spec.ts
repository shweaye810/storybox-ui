import { TestBed } from '@angular/core/testing';

import { HeaderInterceptor } from './header.interceptor';

describe('HeaderInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderInterceptor = TestBed.get(HeaderInterceptor);
    expect(service).toBeTruthy();
  });
});
