import { TestBed } from '@angular/core/testing';

import { NoyPickerAngularLibService } from './noy-picker-angular-lib.service';

describe('NoyPickerAngularLibService', () => {
  let service: NoyPickerAngularLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoyPickerAngularLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
