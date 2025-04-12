import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GosnotificationsComponent } from './gosnotifications.component';

describe('GosnotificationsComponent', () => {
  let component: GosnotificationsComponent;
  let fixture: ComponentFixture<GosnotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GosnotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GosnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
