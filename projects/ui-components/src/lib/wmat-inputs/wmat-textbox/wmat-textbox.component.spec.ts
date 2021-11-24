import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatTextboxComponent } from './wmat-textbox.component';

describe('WmatTextboxComponent', () => {
  let component: WmatTextboxComponent;
  let fixture: ComponentFixture<WmatTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
