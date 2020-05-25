import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addTask',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css'],
  providers: [TaskService]
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute) { }

  task: any = {};
  ngOnInit() {

  }

  add(task: Task, taskId) {
    this.taskService.addSubTask(task, taskId).subscribe();
  }


  get() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['taskId']);
      this.add(this.task, params['taskId']);
    })
  }
}
