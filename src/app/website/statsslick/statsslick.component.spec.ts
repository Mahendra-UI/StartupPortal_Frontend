import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsslickComponent } from './statsslick.component';

describe('StatsslickComponent', () => {
  let component: StatsslickComponent;
  let fixture: ComponentFixture<StatsslickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsslickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsslickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
