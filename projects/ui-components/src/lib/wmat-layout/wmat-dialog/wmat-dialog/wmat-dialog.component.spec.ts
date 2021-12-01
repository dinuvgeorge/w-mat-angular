import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatDialogComponent } from './wmat-dialog.component';

describe('WmatDialogComponent', () => {
  let component: WmatDialogComponent;
  let fixture: ComponentFixture<WmatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
