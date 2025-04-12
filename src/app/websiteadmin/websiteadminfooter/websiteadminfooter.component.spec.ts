import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadminfooterComponent } from './websiteadminfooter.component';

describe('WebsiteadminfooterComponent', () => {
  let component: WebsiteadminfooterComponent;
  let fixture: ComponentFixture<WebsiteadminfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadminfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadminfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
