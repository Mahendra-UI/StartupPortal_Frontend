import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighereducationinsitutesComponent } from './highereducationinsitutes.component';

describe('HighereducationinsitutesComponent', () => {
  let component: HighereducationinsitutesComponent;
  let fixture: ComponentFixture<HighereducationinsitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighereducationinsitutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighereducationinsitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
