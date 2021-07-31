import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Tasks';
import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: false;
  @Output() addNewTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please enter a task');
    }
    const object = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.addNewTask.emit(object);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
