import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellectualpropertyComponent } from './intellectualproperty.component';

describe('IntellectualpropertyComponent', () => {
  let component: IntellectualpropertyComponent;
  let fixture: ComponentFixture<IntellectualpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntellectualpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntellectualpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
