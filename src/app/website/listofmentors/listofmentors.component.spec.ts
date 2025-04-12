import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmentorsComponent } from './listofmentors.component';

describe('ListofmentorsComponent', () => {
  let component: ListofmentorsComponent;
  let fixture: ComponentFixture<ListofmentorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofmentorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofmentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
