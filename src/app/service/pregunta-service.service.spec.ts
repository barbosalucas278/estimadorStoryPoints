import { TestBed } from '@angular/core/testing';

import { PreguntaServiceService } from './pregunta-service.service';

describe('PreguntaServiceService', () => {
  let service: PreguntaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
