import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicprocurementComponent } from './publicprocurement.component';

describe('PublicprocurementComponent', () => {
  let component: PublicprocurementComponent;
  let fixture: ComponentFixture<PublicprocurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicprocurementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicprocurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
