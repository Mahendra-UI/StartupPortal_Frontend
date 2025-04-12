import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocussectorsComponent } from './focussectors.component';

describe('FocussectorsComponent', () => {
  let component: FocussectorsComponent;
  let fixture: ComponentFixture<FocussectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocussectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocussectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
