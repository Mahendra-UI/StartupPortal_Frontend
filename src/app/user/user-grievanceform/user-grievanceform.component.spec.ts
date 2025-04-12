import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGrievanceformComponent } from './user-grievanceform.component';

describe('UserGrievanceformComponent', () => {
  let component: UserGrievanceformComponent;
  let fixture: ComponentFixture<UserGrievanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGrievanceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGrievanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
