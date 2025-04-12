import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedteamComponent } from './dedicatedteam.component';

describe('DedicatedteamComponent', () => {
  let component: DedicatedteamComponent;
  let fixture: ComponentFixture<DedicatedteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DedicatedteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DedicatedteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
