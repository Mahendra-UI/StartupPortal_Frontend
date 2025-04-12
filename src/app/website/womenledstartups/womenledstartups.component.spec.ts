import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenledstartupsComponent } from './womenledstartups.component';

describe('WomenledstartupsComponent', () => {
  let component: WomenledstartupsComponent;
  let fixture: ComponentFixture<WomenledstartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenledstartupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenledstartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
