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
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTaskItem(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleItem(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskRemainder(task).subscribe();
  }
}
