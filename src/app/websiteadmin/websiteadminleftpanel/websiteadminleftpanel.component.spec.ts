import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadminleftpanelComponent } from './websiteadminleftpanel.component';

describe('WebsiteadminleftpanelComponent', () => {
  let component: WebsiteadminleftpanelComponent;
  let fixture: ComponentFixture<WebsiteadminleftpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadminleftpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadminleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
