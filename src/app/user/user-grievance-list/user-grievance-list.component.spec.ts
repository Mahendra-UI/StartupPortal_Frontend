import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGrievanceListComponent } from './user-grievance-list.component';

describe('UserGrievanceListComponent', () => {
  let component: UserGrievanceListComponent;
  let fixture: ComponentFixture<UserGrievanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGrievanceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGrievanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
