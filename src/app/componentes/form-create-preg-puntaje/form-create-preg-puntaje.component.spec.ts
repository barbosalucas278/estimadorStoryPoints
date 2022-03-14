import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatePregPuntajeComponent } from './form-create-preg-puntaje.component';

describe('FormCreatePregPuntajeComponent', () => {
  let component: FormCreatePregPuntajeComponent;
  let fixture: ComponentFixture<FormCreatePregPuntajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatePregPuntajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatePregPuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
