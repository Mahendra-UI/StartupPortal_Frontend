import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycareersComponent } from './applycareers.component';

describe('ApplycareersComponent', () => {
  let component: ApplycareersComponent;
  let fixture: ComponentFixture<ApplycareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplycareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplycareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
