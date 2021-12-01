import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatCardComponent } from './wmat-card.component';

describe('WmatCardComponent', () => {
  let component: WmatCardComponent;
  let fixture: ComponentFixture<WmatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
