import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Task } from '../models/task';
import { environment } from 'src/environments/environment';
import { AlertifyService } from './alertify.service';

@Injectable()
export class TaskService {

  constructor(private httpService: HttpClient,
    private alertifyService: AlertifyService) { }

  path = environment.path;

  getTasks(): Observable<Task[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpService.get<Task[]>(this.path + 'task/getTasks', httpOptions).pipe(
      tap(data => this.alertifyService.success('başarılı')),

      catchError(err => {
        this.alertifyService.error(err.error.message);
        return this.handleError(err);
      })

    );

  }


  getTaskById(taskId: number): Observable<Task> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpService.get<Task>(this.path + 'task/getTask/' + taskId, httpOptions);
  }

  getSubTaskById(taskId: number): Observable<Task[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpService.get<Task[]>(this.path + 'task/getSubTasks/' + taskId, httpOptions);
  }


  // getSubTasks/:parentId

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'bir hata oluştu' + err.error.message;

    } else {
      errorMessage = 'error: ' + err.error.message;
    }

    return throwError(errorMessage);
  }



}

