import { Injectable } from '@angular/core';
import { TASKS } from "./../mock-tasks";
import { Task } from "./../Tasks";
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS
  }
}
