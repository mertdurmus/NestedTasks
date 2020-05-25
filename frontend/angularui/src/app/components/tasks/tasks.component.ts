import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
  // task service is a local service
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[];

  ngOnInit() {
    this.getTasks();

  }

  getTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    });
}



}
