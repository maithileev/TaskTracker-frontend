import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePageDataService } from '../service/data/home-page-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  username = ''
  welcomeMessageFromService:String
  errorMessage :String
  constructor(private router : ActivatedRoute, private service:HomePageDataService) { }

  ngOnInit(): void {
    this.username = this.router.snapshot.params['username']
  }

  getMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithParam(this.username).subscribe(
      response => this.handleSuccesfulResponse(response)
    )
  }

  handleSuccesfulResponse(response){
    this.welcomeMessageFromService=response.message;
  }

  handleErrorResponse(error){
    this.errorMessage = error.error.message
  }
}
