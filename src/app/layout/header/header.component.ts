import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!: any;
  constructor(private authen: AuthenticationService) {
    this.user = JSON.parse(this.authen.loggedIn);
   }

  ngOnInit(): void {
  }

  logout(){
    this.authen.logout();
  }

}
