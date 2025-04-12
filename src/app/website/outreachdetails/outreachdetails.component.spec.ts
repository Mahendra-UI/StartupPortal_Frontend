import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachdetailsComponent } from './outreachdetails.component';

describe('OutreachdetailsComponent', () => {
  let component: OutreachdetailsComponent;
  let fixture: ComponentFixture<OutreachdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutreachdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutreachdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
