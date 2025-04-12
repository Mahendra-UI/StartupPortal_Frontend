import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStartupViewComponent } from './user-startup-view.component';

describe('UserStartupViewComponent', () => {
  let component: UserStartupViewComponent;
  let fixture: ComponentFixture<UserStartupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStartupViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStartupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
