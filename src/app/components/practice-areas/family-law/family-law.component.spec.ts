import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLawComponent } from './family-law.component';

describe('FamilyLawComponent', () => {
  let component: FamilyLawComponent;
  let fixture: ComponentFixture<FamilyLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
