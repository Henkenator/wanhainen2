import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLawComponent } from './general-law.component';

describe('GeneralLawComponent', () => {
  let component: GeneralLawComponent;
  let fixture: ComponentFixture<GeneralLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
