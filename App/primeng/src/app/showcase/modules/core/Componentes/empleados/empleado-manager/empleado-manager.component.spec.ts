import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoManagerComponent } from './empleado-manager.component';

describe('EmpleadoManagerComponent', () => {
  let component: EmpleadoManagerComponent;
  let fixture: ComponentFixture<EmpleadoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
