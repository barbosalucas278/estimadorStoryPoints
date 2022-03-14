import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreacionOpcionComponent } from './modal-creacion-opcion.component';

describe('ModalCreacionOpcionComponent', () => {
  let component: ModalCreacionOpcionComponent;
  let fixture: ComponentFixture<ModalCreacionOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreacionOpcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreacionOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
