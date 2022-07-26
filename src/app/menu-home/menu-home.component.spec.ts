import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomeComponent } from './menu-home.component';

describe('MenuHomeComponent', () => {
  let component: MenuHomeComponent;
  let fixture: ComponentFixture<MenuHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
