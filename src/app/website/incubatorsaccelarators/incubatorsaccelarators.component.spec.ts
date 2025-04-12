import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubatorsaccelaratorsComponent } from './incubatorsaccelarators.component';

describe('IncubatorsaccelaratorsComponent', () => {
  let component: IncubatorsaccelaratorsComponent;
  let fixture: ComponentFixture<IncubatorsaccelaratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncubatorsaccelaratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncubatorsaccelaratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
