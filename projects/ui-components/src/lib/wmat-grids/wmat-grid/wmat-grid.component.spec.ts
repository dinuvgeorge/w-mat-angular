import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatGridComponent } from './wmat-grid.component';

describe('WmatTableComponent', () => {
  let component: WmatGridComponent;
  let fixture: ComponentFixture<WmatGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
