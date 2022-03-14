import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeDeAlertaComponent } from './mensaje-de-alerta.component';

describe('MensajeDeAlertaComponent', () => {
  let component: MensajeDeAlertaComponent;
  let fixture: ComponentFixture<MensajeDeAlertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeDeAlertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeDeAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
