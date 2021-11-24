import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatAltitudeTextboxComponent } from './wmat-altitude-textbox.component';

describe('WmatAltitudeTextboxComponent', () => {
  let component: WmatAltitudeTextboxComponent;
  let fixture: ComponentFixture<WmatAltitudeTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatAltitudeTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatAltitudeTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
