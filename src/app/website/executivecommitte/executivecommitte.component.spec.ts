import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutivecommitteComponent } from './executivecommitte.component';

describe('ExecutivecommitteComponent', () => {
  let component: ExecutivecommitteComponent;
  let fixture: ComponentFixture<ExecutivecommitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutivecommitteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutivecommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
