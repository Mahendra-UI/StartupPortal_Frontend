import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMentorViewComponent } from './user-mentor-view.component';

describe('UserMentorViewComponent', () => {
  let component: UserMentorViewComponent;
  let fixture: ComponentFixture<UserMentorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMentorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMentorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
