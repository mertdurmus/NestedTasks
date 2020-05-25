import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TasksComponent } from '../tasks/tasks.component';
import { Task } from 'src/app/models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subTasks',
  templateUrl: './subTasks.component.html',
  styleUrls: ['./subTasks.component.css'],
  providers:[TaskService]

})
export class SubTasksComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['taskId']);
      this.getSubTasks(params['taskId']);
    })
  }

  getSubTasks(taskId){
    this.taskService.getSubTaskById(taskId).subscribe(data => {
      this.tasks = data;
    });
    }
}
