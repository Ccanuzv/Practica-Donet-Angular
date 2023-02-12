import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalondrimoComponent } from './palondrimo.component';

describe('PalondrimoComponent', () => {
  let component: PalondrimoComponent;
  let fixture: ComponentFixture<PalondrimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalondrimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalondrimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
