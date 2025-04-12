import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorshipprocessComponent } from './mentorshipprocess.component';

describe('MentorshipprocessComponent', () => {
  let component: MentorshipprocessComponent;
  let fixture: ComponentFixture<MentorshipprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorshipprocessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorshipprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
