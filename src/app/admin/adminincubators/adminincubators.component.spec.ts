import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminincubatorsComponent } from './adminincubators.component';

describe('AdminincubatorsComponent', () => {
  let component: AdminincubatorsComponent;
  let fixture: ComponentFixture<AdminincubatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminincubatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminincubatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
