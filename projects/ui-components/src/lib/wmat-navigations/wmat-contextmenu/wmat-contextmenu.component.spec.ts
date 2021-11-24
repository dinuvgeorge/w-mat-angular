import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatContextmenuComponent } from './wmat-contextmenu.component';

describe('WmatContextmenuComponent', () => {
  let component: WmatContextmenuComponent;
  let fixture: ComponentFixture<WmatContextmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatContextmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatContextmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
