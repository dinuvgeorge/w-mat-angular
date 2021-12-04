import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatInputTextComponent } from './wmat-input-text.component';

describe('WmatInputTextComponent', () => {
  let component: WmatInputTextComponent;
  let fixture: ComponentFixture<WmatInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WmatInputTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
