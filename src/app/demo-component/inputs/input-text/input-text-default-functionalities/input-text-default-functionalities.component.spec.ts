import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextDefaultFunctionalitiesComponent } from './input-text-default-functionalities.component';

describe('InputTextDefaultFunctionalitiesComponent', () => {
  let component: InputTextDefaultFunctionalitiesComponent;
  let fixture: ComponentFixture<InputTextDefaultFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputTextDefaultFunctionalitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextDefaultFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
