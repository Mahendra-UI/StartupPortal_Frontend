import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingoneComponent } from './offeringone.component';

describe('OfferingoneComponent', () => {
  let component: OfferingoneComponent;
  let fixture: ComponentFixture<OfferingoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferingoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
