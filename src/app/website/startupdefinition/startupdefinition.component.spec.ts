import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupdefinitionComponent } from './startupdefinition.component';

describe('StartupdefinitionComponent', () => {
  let component: StartupdefinitionComponent;
  let fixture: ComponentFixture<StartupdefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupdefinitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupdefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
