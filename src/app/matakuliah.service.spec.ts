import { TestBed } from '@angular/core/testing';

import { MatakuliahService } from './matakuliah.service';

describe('MatakuliahService', () => {
  let service: MatakuliahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatakuliahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
