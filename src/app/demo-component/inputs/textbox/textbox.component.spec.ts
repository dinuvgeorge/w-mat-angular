import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponent } from './textbox.component';

describe('TextBoxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
