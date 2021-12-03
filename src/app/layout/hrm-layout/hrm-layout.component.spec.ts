import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmLayoutComponent } from './hrm-layout.component';

describe('HrmLayoutComponent', () => {
  let component: HrmLayoutComponent;
  let fixture: ComponentFixture<HrmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
