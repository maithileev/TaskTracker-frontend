import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private authenticationService : AuthenticationService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username = 'Maithilee'
    // let password = 'Mai'
    // let BasicAuthHeaderString  = 'Basic ' + window.btoa(username + ':' + password);
    let BasicAuthHeaderString = this.authenticationService.getToken();
    let username = this.authenticationService.getUser();

    if(BasicAuthHeaderString && username){
     req = req.clone({
        setHeaders : {
           Authorization : BasicAuthHeaderString
        }
      })
    }

    return next.handle(req);
  }
}
