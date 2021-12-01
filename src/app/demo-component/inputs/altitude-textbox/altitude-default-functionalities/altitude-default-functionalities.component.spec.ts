import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltitudeDefaultFunctionalitiesComponent } from './altitude-default-functionalities.component';

describe('TextboxDefaultFunctionalitiesComponent', () => {
  let component: AltitudeDefaultFunctionalitiesComponent;
  let fixture: ComponentFixture<AltitudeDefaultFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltitudeDefaultFunctionalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltitudeDefaultFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
