import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/taskDetail/taskDetail.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuardService } from './services/RouteGuard.service';
import { SubTasksComponent } from './components/subTasks/subTasks.component';
import { AddTaskComponent } from './components/addTask/addTask.component';
import { AddNewTaskComponent } from './components/addNewTask/addNewTask.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'tasks', component: TasksComponent,  canActivate: [RouteGuardService] },
  {path: 'register', component: RegisterComponent },
  { path: 'taskDetail/:taskId', component: TaskDetailComponent,  canActivate: [RouteGuardService]},
  { path: 'subTaskDetail/:taskId', component: SubTasksComponent,  canActivate: [RouteGuardService]},
  { path: 'addSubTask/:taskId', component: AddTaskComponent,  canActivate: [RouteGuardService]},
  { path: 'addNewTask', component: AddNewTaskComponent,  canActivate: [RouteGuardService]},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
