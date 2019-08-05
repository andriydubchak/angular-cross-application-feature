import { TestBed } from '@angular/core/testing';

import { DataStructuresService } from './data-structures.service';

describe('DataStructuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStructuresService = TestBed.get(DataStructuresService);
    expect(service).toBeTruthy();
  });
});
