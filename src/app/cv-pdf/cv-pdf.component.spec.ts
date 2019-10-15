import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPdfComponent } from './cv-pdf.component';

describe('CvPdfComponent', () => {
  let component: CvPdfComponent;
  let fixture: ComponentFixture<CvPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
