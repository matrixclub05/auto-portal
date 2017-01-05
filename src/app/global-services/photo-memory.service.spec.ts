/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoMemoryService } from './photo-memory.service';

describe('PhotoMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoMemoryService]
    });
  });

  it('should ...', inject([PhotoMemoryService], (service: PhotoMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
