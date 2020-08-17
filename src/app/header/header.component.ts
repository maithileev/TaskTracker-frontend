import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //result :boolean = false;
  constructor(public authenticateService : AuthenticationService) { }

  ngOnInit(): void {
   // this.result = this.authenticateService.userStatus();
  }
  
}
