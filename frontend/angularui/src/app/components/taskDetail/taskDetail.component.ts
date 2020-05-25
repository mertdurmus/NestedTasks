import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-taskDetail',
  templateUrl: './taskDetail.component.html',
  styleUrls: ['./taskDetail.component.css'],
  providers: [TaskService]
})
export class TaskDetailComponent implements OnInit {

  task: Task;

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['taskId']);
      this.getTaskById(params['taskId']);
    })
  }

  getTaskById(taskId) {
    this.taskService.getTaskById(taskId).subscribe(data => {
      this.task = data;
  
    })
  }
}
