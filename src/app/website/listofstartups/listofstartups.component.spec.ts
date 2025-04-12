import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofstartupsComponent } from './listofstartups.component';

describe('ListofstartupsComponent', () => {
  let component: ListofstartupsComponent;
  let fixture: ComponentFixture<ListofstartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofstartupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofstartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
