import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatInputComponent } from './wmat-input.component';

describe('WmatInputComponent', () => {
  let component: WmatInputComponent;
  let fixture: ComponentFixture<WmatInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
