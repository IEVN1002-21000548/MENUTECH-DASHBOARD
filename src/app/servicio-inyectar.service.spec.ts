import { TestBed } from '@angular/core/testing';

import { ServicioInyectarService } from './servicio-inyectar.service';

describe('ServicioInyectarService', () => {
  let service: ServicioInyectarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInyectarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
