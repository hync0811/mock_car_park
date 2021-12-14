import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import menu, { SlideBarLink } from 'src/app/_models/nav_link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() expanded!: boolean;
  sideBarLinks!: SlideBarLink[] | undefined;
  user:any;
  role: any;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }
  constructor(private authen: AuthenticationService, private router: Router) { 
    this.user = JSON.parse(this.authen.loggedIn);
    this.role = this.router.url.slice(1,4);
  }

  ngOnInit(): void {
    if(this.role === "hrm"){
      this.sideBarLinks = menu.get("Admin_Hrm");
    }
    else if(this.role === "cpa"){
      this.sideBarLinks = menu.get("Admin_Carpark");
    }
  }

}
