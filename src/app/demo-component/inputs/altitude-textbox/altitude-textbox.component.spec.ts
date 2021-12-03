import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeTextboxComponent } from './altitude-textbox.component';

describe('AltitudeTextboxComponent', () => {
  let component: AltitudeTextboxComponent;
  let fixture: ComponentFixture<AltitudeTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltitudeTextboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltitudeTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
