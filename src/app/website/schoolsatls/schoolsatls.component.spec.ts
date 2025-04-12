import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsatlsComponent } from './schoolsatls.component';

describe('SchoolsatlsComponent', () => {
  let component: SchoolsatlsComponent;
  let fixture: ComponentFixture<SchoolsatlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsatlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsatlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
