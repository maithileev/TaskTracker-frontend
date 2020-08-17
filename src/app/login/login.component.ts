import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false
  constructor(private router : Router, private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.authenticationService.authenticateLogin(this.username,this.password)) {
      this.router.navigate(['home',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

}
