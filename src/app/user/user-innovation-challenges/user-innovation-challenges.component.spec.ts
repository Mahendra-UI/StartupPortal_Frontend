import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInnovationChallengesComponent } from './user-innovation-challenges.component';

describe('UserInnovationChallengesComponent', () => {
  let component: UserInnovationChallengesComponent;
  let fixture: ComponentFixture<UserInnovationChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInnovationChallengesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInnovationChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
