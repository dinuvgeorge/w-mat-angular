import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatInputNumericComponent } from './wmat-input-numeric.component';

describe('WmatInputNumericComponent', () => {
  let component: WmatInputNumericComponent;
  let fixture: ComponentFixture<WmatInputNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WmatInputNumericComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatInputNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
