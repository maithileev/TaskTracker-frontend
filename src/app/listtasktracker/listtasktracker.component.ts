import { Component, OnInit } from '@angular/core';

export class Task{
  constructor(
    public id : number,
    public description : string,
    public priority : string,
    public status : boolean,
    public targetDate : Date 
  ){}
}

@Component({
  selector: 'app-listtasktracker',
  templateUrl: './listtasktracker.component.html',
  styleUrls: ['./listtasktracker.component.css']
})
export class ListtasktrackerComponent implements OnInit {

  tasks = [
    new Task(1,'Learn to Dance','Low',false,new Date()),
    new Task(2,'Learn to Draw','Medium',false,new Date())
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
