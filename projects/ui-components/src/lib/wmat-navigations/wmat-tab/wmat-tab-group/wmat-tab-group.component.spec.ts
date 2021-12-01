import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatTabGroupComponent } from './wmat-tab-group.component';

describe('WmatTabGroupComponent', () => {
  let component: WmatTabGroupComponent;
  let fixture: ComponentFixture<WmatTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatTabGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
