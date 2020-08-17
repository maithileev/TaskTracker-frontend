import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 
@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get('http://localhost:8080/helloworldbean')
    //console.log("Execute Hello World Bean Service");
  }
}
