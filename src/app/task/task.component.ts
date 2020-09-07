import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../service/data/task-data.service';
import { Task } from '../listtasktracker/listtasktracker.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  id: number
  task : Task
  constructor(
    private service : TaskDataService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.task = new Task(this.id,'','',false,new Date())

    if(this.id != -1)
    this.service.getTask('Maithilee',this.id).subscribe(
      response => this.task = response
    )
  }

  saveTask(){
    if(this.id === -1){
      this.service.createTask('Maithilee',this.task).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['tasks'])
      })
    }
    else{
      this.service.updateTask('Maithilee',this.id,this.task).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['tasks'])
        }
      )
    }
    
  }

}
