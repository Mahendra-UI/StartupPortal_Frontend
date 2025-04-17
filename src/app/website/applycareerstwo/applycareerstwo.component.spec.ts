import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycareerstwoComponent } from './applycareerstwo.component';

describe('ApplycareerstwoComponent', () => {
  let component: ApplycareerstwoComponent;
  let fixture: ComponentFixture<ApplycareerstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplycareerstwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplycareerstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
