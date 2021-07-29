import { Component, OnInit } from '@angular/core';
import { TASKS } from './../../mock-tasks';
import { Task } from './../../Tasks';
import { TaskService } from './../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
