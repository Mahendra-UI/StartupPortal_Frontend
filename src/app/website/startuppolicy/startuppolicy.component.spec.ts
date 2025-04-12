import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartuppolicyComponent } from './startuppolicy.component';

describe('StartuppolicyComponent', () => {
  let component: StartuppolicyComponent;
  let fixture: ComponentFixture<StartuppolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartuppolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartuppolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
