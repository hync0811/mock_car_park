import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CpmService } from 'src/app/_services/cpm/cpm.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: any[] = [];
  nameColumn: string[] = [
    'No',
    'Trip',
    'License plate',
    'Customer',
    'Booking time',
    'Action',
  ]
  constructor(
    private cpmService: CpmService
  ) { }

  getTicket() {
    this.cpmService.getAllTicket(0, 10).subscribe((res: any) => {
      this.tickets = res.data;
      console.log(this.tickets);

    }, (error: any) => {
      console.log(error);

    })
  }

  deleteTicket(ticketid: string) {
    let text = "Are you sure to delete!!!";
      if (confirm(text) == true) {
        this.cpmService.deleteTicket(ticketid).subscribe((res: any) => {
          this.getTicket();
        })
      }
    
  }

  ngOnInit(): void {
    this.getTicket();
  }

}

