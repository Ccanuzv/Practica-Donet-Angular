import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteServicioComponent } from './cliente-servicio.component';

describe('ClienteServicioComponent', () => {
  let component: ClienteServicioComponent;
  let fixture: ComponentFixture<ClienteServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
