import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadmincareersapplicationsComponent } from './websiteadmincareersapplications.component';

describe('WebsiteadmincareersapplicationsComponent', () => {
  let component: WebsiteadmincareersapplicationsComponent;
  let fixture: ComponentFixture<WebsiteadmincareersapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadmincareersapplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadmincareersapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
