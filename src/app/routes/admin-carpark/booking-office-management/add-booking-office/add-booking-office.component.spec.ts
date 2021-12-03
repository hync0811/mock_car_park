import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingOfficeComponent } from './add-booking-office.component';

describe('AddBookingOfficeComponent', () => {
  let component: AddBookingOfficeComponent;
  let fixture: ComponentFixture<AddBookingOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookingOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
