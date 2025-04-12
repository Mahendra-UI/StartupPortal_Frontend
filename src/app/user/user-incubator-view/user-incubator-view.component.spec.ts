import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncubatorViewComponent } from './user-incubator-view.component';

describe('UserIncubatorViewComponent', () => {
  let component: UserIncubatorViewComponent;
  let fixture: ComponentFixture<UserIncubatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIncubatorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIncubatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
