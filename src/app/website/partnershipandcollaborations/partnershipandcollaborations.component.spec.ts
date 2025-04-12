import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipandcollaborationsComponent } from './partnershipandcollaborations.component';

describe('PartnershipandcollaborationsComponent', () => {
  let component: PartnershipandcollaborationsComponent;
  let fixture: ComponentFixture<PartnershipandcollaborationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipandcollaborationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipandcollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
