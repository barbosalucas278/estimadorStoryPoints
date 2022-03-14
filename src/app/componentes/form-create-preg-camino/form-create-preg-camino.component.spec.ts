import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatePregCaminoComponent } from './form-create-preg-camino.component';

describe('FormCreatePregCaminoComponent', () => {
  let component: FormCreatePregCaminoComponent;
  let fixture: ComponentFixture<FormCreatePregCaminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatePregCaminoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreatePregCaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
