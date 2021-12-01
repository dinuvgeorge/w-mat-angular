import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxDefaultFunctionalitiesComponent } from './textbox-default-functionalities.component';

describe('TextboxDefaultFunctionalitiesComponent', () => {
  let component: TextboxDefaultFunctionalitiesComponent;
  let fixture: ComponentFixture<TextboxDefaultFunctionalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxDefaultFunctionalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxDefaultFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
