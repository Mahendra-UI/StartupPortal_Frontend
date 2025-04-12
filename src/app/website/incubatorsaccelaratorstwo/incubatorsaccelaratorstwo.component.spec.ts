import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubatorsaccelaratorstwoComponent } from './incubatorsaccelaratorstwo.component';

describe('IncubatorsaccelaratorstwoComponent', () => {
  let component: IncubatorsaccelaratorstwoComponent;
  let fixture: ComponentFixture<IncubatorsaccelaratorstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncubatorsaccelaratorstwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncubatorsaccelaratorstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
