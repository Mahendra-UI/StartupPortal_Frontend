import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStartupMentorConnectComponent } from './user-startup-mentor-connect.component';

describe('UserStartupMentorConnectComponent', () => {
  let component: UserStartupMentorConnectComponent;
  let fixture: ComponentFixture<UserStartupMentorConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStartupMentorConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStartupMentorConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
