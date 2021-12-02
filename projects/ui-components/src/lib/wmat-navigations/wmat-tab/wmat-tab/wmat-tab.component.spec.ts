import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatTabComponent } from './wmat-tab.component';

describe('WmatTabComponent', () => {
  let component: WmatTabComponent;
  let fixture: ComponentFixture<WmatTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
