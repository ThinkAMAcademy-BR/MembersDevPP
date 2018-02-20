import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCardInputComponent } from './filter-card-input.component';

describe('FilterCardInputComponent', () => {
  let component: FilterCardInputComponent;
  let fixture: ComponentFixture<FilterCardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
