import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIncubationSpaceComponent } from './user-incubation-space.component';

describe('UserIncubationSpaceComponent', () => {
  let component: UserIncubationSpaceComponent;
  let fixture: ComponentFixture<UserIncubationSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIncubationSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIncubationSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
