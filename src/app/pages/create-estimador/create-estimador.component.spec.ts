import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstimadorComponent } from './create-estimador.component';

describe('CreateEstimadorComponent', () => {
  let component: CreateEstimadorComponent;
  let fixture: ComponentFixture<CreateEstimadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEstimadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEstimadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
