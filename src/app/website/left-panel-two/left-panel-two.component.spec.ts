import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelTwoComponent } from './left-panel-two.component';

describe('LeftPanelTwoComponent', () => {
  let component: LeftPanelTwoComponent;
  let fixture: ComponentFixture<LeftPanelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPanelTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftPanelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
