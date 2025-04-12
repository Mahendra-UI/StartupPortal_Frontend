import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeslidebannerComponent } from './homeslidebanner.component';

describe('HomeslidebannerComponent', () => {
  let component: HomeslidebannerComponent;
  let fixture: ComponentFixture<HomeslidebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeslidebannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeslidebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
