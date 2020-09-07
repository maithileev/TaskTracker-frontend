import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../service/data/task-data.service';
import { Router } from '@angular/router';

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


  tasks:Task[]
  // = [
  //   new Task(1,'Learn to Dance','Low',false,new Date()),
  //   new Task(2,'Learn to Draw','Medium',false,new Date())
  // ]
  message: String
  constructor( private service : TaskDataService, private router : Router) { }

  ngOnInit(){
    this.getTasks();
  }

  getTasks(){
    this.service.getAllTasks('Maithilee').subscribe(
      response =>{
        console.log(response)
        this.tasks = response
      } 
    )
  }

  updateTask(id){
    console.log("update")
    this.router.navigate(['tasks',id])
  }

  deleteTask(id){
    console.log("delete task")
    console.log(id) 
    this.service.deleteTask('Maithilee',id).subscribe(
      response => {
        console.log(response);
        this.message = "Deleted Successfully"
        this.getTasks();
      }
    )
  }
  addTask(){
    this.router.navigate(['tasks',-1])
  }

}
