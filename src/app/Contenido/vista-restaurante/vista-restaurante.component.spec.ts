import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRestauranteComponent } from './vista-restaurante.component';

describe('VistaRestauranteComponent', () => {
  let component: VistaRestauranteComponent;
  let fixture: ComponentFixture<VistaRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaRestauranteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
