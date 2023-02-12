import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiopassComponent } from './cambiopass.component';

describe('CambiopassComponent', () => {
  let component: CambiopassComponent;
  let fixture: ComponentFixture<CambiopassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiopassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiopassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
