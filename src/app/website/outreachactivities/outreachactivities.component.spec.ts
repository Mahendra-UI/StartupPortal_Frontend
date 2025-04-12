import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutreachactivitiesComponent } from './outreachactivities.component';

describe('OutreachactivitiesComponent', () => {
  let component: OutreachactivitiesComponent;
  let fixture: ComponentFixture<OutreachactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutreachactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutreachactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
