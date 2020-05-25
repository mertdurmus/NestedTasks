import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AlertifyService } from './services/alertify.service';
import { TaskDetailComponent } from './components/taskDetail/taskDetail.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/authInterceptor.service';
import { RouteGuardService } from './services/RouteGuard.service';
import { SubTasksComponent } from './components/subTasks/subTasks.component';
import { AddTaskComponent } from './components/addTask/addTask.component';
import { AddNewTaskComponent } from './components/addNewTask/addNewTask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    TasksComponent,
    TaskDetailComponent,
    RegisterComponent,
    SubTasksComponent,
    AddTaskComponent,
    AddNewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertifyService,
    AuthService,
    RouteGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  // alertify service is a global service
  bootstrap: [AppComponent]
})
export class AppModule { }
