import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalagencyComponent } from './nodalagency.component';

describe('NodalagencyComponent', () => {
  let component: NodalagencyComponent;
  let fixture: ComponentFixture<NodalagencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalagencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodalagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
