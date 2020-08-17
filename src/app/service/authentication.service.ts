import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticateLogin(username,password){
    if(username==='Maithilee' && password==='Mai'){
      sessionStorage.setItem('user',username)
      return true
   }
   else{
     return false
   }
  }

  userStatus(){
    let status = sessionStorage.getItem('user')
    return !(status === null)
  }

  logout(){
    sessionStorage.removeItem('user')
  }

}
