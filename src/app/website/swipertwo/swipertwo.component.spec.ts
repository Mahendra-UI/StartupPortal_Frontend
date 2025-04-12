import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipertwoComponent } from './swipertwo.component';

describe('SwipertwoComponent', () => {
  let component: SwipertwoComponent;
  let fixture: ComponentFixture<SwipertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipertwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
