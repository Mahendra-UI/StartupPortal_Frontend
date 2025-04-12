import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceinformationComponent } from './spaceinformation.component';

describe('SpaceinformationComponent', () => {
  let component: SpaceinformationComponent;
  let fixture: ComponentFixture<SpaceinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
