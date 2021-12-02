import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatTabContentComponent } from './wmat-tab-content.component';

describe('WmatTabContentComponent', () => {
  let component: WmatTabContentComponent;
  let fixture: ComponentFixture<WmatTabContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatTabContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatTabContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
