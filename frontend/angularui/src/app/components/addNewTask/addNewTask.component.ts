import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-addNewTask',
  templateUrl: './addNewTask.component.html',
  styleUrls: ['./addNewTask.component.css'],
  providers: [TaskService]
})
export class AddNewTaskComponent implements OnInit {

  constructor(private taskService: TaskService,
              private router: Router) { }

  task: any = {};
  ngOnInit() {

  }

  add(task: Task) {
    this.taskService.addTask(task).subscribe(data=>{
      this.router.navigateByUrl('/tasks');
    });

  }

}
