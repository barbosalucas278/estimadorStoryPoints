import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorPrevioDePreguntasComponent } from './visualizador-previo-de-preguntas.component';

describe('VisualizadorPrevioDePreguntasComponent', () => {
  let component: VisualizadorPrevioDePreguntasComponent;
  let fixture: ComponentFixture<VisualizadorPrevioDePreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizadorPrevioDePreguntasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorPrevioDePreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
