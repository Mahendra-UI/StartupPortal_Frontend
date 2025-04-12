import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrievancestatusComponent } from './grievancestatus.component';

describe('GrievancestatusComponent', () => {
  let component: GrievancestatusComponent;
  let fixture: ComponentFixture<GrievancestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrievancestatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrievancestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
