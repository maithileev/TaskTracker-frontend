import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Session } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  // authenticateLogin(username,password){
  //   if(username==='Maithilee' && password==='Mai'){
  //     sessionStorage.setItem('user',username)
  //     return true
  //  }
  //  else{
  //    return false
  //  }
  // }

  // createAuthHeader(){
    
  //   return BasicAuthHeaderString;
  // }

  executeBasicAuthentication(username,password){
    let BasicAuthHeaderString  = 'Basic ' + window.btoa(username + ':' + password);
    //console.log(basicAuthenticationHeaderString)
    let headers = new HttpHeaders({
      Authorization: BasicAuthHeaderString
    })
    return this.http.get<AuthenticationModel>(`http://localhost:8080/BasicAuthentication`,
    {headers}).pipe(
      map(
        data =>{
          sessionStorage.setItem('user',username);
          sessionStorage.setItem('token',BasicAuthHeaderString);
          return data;
        }
      )
    )
  }
  
  getUser(){
    return sessionStorage.getItem('user')
  }

  getToken(){
    if(this.getUser())
      return sessionStorage.getItem('token')
  }
  userStatus(){
    let status = sessionStorage.getItem('user')
    return !(status === null)
  }

  logout(){
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
  }

}

export class AuthenticationModel{
  constructor(public message: string){ }
}