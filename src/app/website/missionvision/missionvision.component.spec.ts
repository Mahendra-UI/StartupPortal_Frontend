import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionvisionComponent } from './missionvision.component';

describe('MissionvisionComponent', () => {
  let component: MissionvisionComponent;
  let fixture: ComponentFixture<MissionvisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionvisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
