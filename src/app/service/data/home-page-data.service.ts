import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(
    public message : String
  ){}
}
 
@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloworldbean');
  }

  // createAuthHeader(){
  //   let username = 'Maithilee'
  //   let password = 'Mai'
  //   let BasicAuthHeaderString  = 'Basic ' + window.btoa(username + ':' + password);
  //   return BasicAuthHeaderString;
  // }

  executeHelloWorldBeanServiceWithParam(name){
    // let basicAuthHeaderString =  this.createAuthHeader()
    // //console.log(basicAuthenticationHeaderString)
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworldbean/path/${name}`,
    //{headers}
    );
  }
}
