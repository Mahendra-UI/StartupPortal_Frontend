import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialimpactstartupsComponent } from './socialimpactstartups.component';

describe('SocialimpactstartupsComponent', () => {
  let component: SocialimpactstartupsComponent;
  let fixture: ComponentFixture<SocialimpactstartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialimpactstartupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialimpactstartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
