import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentinstitutionalsupportstartupsComponent } from './departmentinstitutionalsupportstartups.component';

describe('DepartmentinstitutionalsupportstartupsComponent', () => {
  let component: DepartmentinstitutionalsupportstartupsComponent;
  let fixture: ComponentFixture<DepartmentinstitutionalsupportstartupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentinstitutionalsupportstartupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentinstitutionalsupportstartupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
