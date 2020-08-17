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

  constructor(private router : ActivatedRoute, private service:HomePageDataService) { }

  ngOnInit(): void {
    this.username = this.router.snapshot.params['username']
  }

  getMessage(){
    console.log(this.service.executeHelloWorldBeanService())
  }
}
