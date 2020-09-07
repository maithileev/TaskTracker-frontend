import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/listtasktracker/listtasktracker.component';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http : HttpClient
  ) { }

  getAllTasks(username){
    return this.http.get<Task[]>(`http://localhost:8080/users/${username}/tasks`)    
    console.log("in service")
  }

  deleteTask(username,taskId){
    return this.http.delete(`http://localhost:8080//users/${username}/tasks/${taskId}`)
  }

  getTask(username,taskId){
    return this.http.get<Task>(`http://localhost:8080/users/${username}/tasks/${taskId}`)
  }

  updateTask(username, taskId, task){
    return this.http.put(`http://localhost:8080/users/${username}/tasks/${taskId}`,task)
  }

  createTask(username, task){
    return this.http.post(`http://localhost:8080/users/${username}/tasks/`,task)
  }
}
