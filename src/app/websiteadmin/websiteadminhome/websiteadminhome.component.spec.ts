import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteadminhomeComponent } from './websiteadminhome.component';

describe('WebsiteadminhomeComponent', () => {
  let component: WebsiteadminhomeComponent;
  let fixture: ComponentFixture<WebsiteadminhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteadminhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteadminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
