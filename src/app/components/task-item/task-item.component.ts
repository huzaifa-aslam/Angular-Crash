import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleItem: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  onDelete(tst: Task) {
    this.onDeleteTask.emit(tst);
  }
  onToggleClick(task: Task) {
    this.onToggleItem.emit(task);
  }
}
