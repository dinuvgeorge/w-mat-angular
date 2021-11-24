import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmatSidenavComponent } from './wmat-sidenav.component';

describe('SidenavComponent', () => {
  let component: WmatSidenavComponent;
  let fixture: ComponentFixture<WmatSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmatSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmatSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
