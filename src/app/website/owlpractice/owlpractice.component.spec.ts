import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlpracticeComponent } from './owlpractice.component';

describe('OwlpracticeComponent', () => {
  let component: OwlpracticeComponent;
  let fixture: ComponentFixture<OwlpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
