import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLawComponent } from './social-law.component';

describe('SocialLawComponent', () => {
  let component: SocialLawComponent;
  let fixture: ComponentFixture<SocialLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
