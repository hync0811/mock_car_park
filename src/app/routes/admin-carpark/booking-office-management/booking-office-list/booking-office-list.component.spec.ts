import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOfficeListComponent } from './booking-office-list.component';

describe('BookingOfficeListComponent', () => {
  let component: BookingOfficeListComponent;
  let fixture: ComponentFixture<BookingOfficeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingOfficeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingOfficeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
