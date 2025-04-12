import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrievanceformComponent } from './admin-grievanceform.component';

describe('AdminGrievanceformComponent', () => {
  let component: AdminGrievanceformComponent;
  let fixture: ComponentFixture<AdminGrievanceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGrievanceformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGrievanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
