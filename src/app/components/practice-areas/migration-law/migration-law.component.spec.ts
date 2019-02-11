import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationLawComponent } from './migration-law.component';

describe('MigrationLawComponent', () => {
  let component: MigrationLawComponent;
  let fixture: ComponentFixture<MigrationLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
