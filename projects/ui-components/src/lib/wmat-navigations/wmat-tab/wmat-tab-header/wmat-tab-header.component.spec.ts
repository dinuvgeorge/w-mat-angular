import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatTabHeaderComponent } from './wmat-tab-header.component';

describe('WmatTabHeaderComponent', () => {
  let component: WmatTabHeaderComponent;
  let fixture: ComponentFixture<WmatTabHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatTabHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatTabHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
