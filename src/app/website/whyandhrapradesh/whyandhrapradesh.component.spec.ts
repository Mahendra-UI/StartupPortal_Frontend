import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyandhrapradeshComponent } from './whyandhrapradesh.component';

describe('WhyandhrapradeshComponent', () => {
  let component: WhyandhrapradeshComponent;
  let fixture: ComponentFixture<WhyandhrapradeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyandhrapradeshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyandhrapradeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
