import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerylightboxComponent } from './gallerylightbox.component';

describe('GallerylightboxComponent', () => {
  let component: GallerylightboxComponent;
  let fixture: ComponentFixture<GallerylightboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerylightboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerylightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
