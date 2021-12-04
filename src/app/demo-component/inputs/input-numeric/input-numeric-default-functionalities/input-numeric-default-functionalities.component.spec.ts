import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumericDefaultFunctionalitiesComponent } from './input-numeric-default-functionalities.component';

describe('TextboxDefaultFunctionalitiesComponent', () => {
  let component: InputNumericDefaultFunctionalitiesComponent;
  let fixture: ComponentFixture<InputNumericDefaultFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNumericDefaultFunctionalitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      InputNumericDefaultFunctionalitiesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
