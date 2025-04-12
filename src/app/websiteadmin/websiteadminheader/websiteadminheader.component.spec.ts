import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadminheaderComponent } from './websiteadminheader.component';

describe('WebsiteadminheaderComponent', () => {
  let component: WebsiteadminheaderComponent;
  let fixture: ComponentFixture<WebsiteadminheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadminheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadminheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
