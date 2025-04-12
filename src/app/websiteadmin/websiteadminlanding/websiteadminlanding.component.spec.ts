import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadminlandingComponent } from './websiteadminlanding.component';

describe('WebsiteadminlandingComponent', () => {
  let component: WebsiteadminlandingComponent;
  let fixture: ComponentFixture<WebsiteadminlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadminlandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadminlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
