import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlatillosComponent } from './editar-platillos.component';

describe('EditarPlatillosComponent', () => {
  let component: EditarPlatillosComponent;
  let fixture: ComponentFixture<EditarPlatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarPlatillosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
