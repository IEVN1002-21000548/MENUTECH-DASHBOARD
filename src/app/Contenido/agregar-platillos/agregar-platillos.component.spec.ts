import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlatillosComponent } from './agregar-platillos.component';

describe('AgregarPlatillosComponent', () => {
  let component: AgregarPlatillosComponent;
  let fixture: ComponentFixture<AgregarPlatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarPlatillosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
