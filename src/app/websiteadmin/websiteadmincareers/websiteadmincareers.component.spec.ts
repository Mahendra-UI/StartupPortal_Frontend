import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadmincareersComponent } from './websiteadmincareers.component';

describe('WebsiteadmincareersComponent', () => {
  let component: WebsiteadmincareersComponent;
  let fixture: ComponentFixture<WebsiteadmincareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadmincareersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadmincareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
