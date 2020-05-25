import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/taskDetail/taskDetail.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuardService } from './services/RouteGuard.service';
import { SubTasksComponent } from './components/subTasks/subTasks.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'tasks', component: TasksComponent,  canActivate: [RouteGuardService] },
  {path: 'register', component: RegisterComponent },
  { path: 'taskDetail/:taskId', component: TaskDetailComponent,  canActivate: [RouteGuardService]},
  { path: 'subTaskDetail/:taskId', component: SubTasksComponent,  canActivate: [RouteGuardService]},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
