import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInjuriesComponent } from './person-injuries.component';

describe('PersonInjuriesComponent', () => {
  let component: PersonInjuriesComponent;
  let fixture: ComponentFixture<PersonInjuriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonInjuriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
