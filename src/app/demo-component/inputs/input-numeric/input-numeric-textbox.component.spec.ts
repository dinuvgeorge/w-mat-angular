import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumericTextboxComponent } from './input-numeric-textbox.component';

describe('InputNumericTextboxComponent', () => {
  let component: InputNumericTextboxComponent;
  let fixture: ComponentFixture<InputNumericTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNumericTextboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumericTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
