import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../models/registerUser';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { LoginUser } from '../models/loginUser';


export const AUTHENTICATED_USER = 'authenticatedUser';


@Injectable()
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) { }

  path = environment.path;
  userToken: any;
  TOKEN_KEY = 'token';



  register(registerUser: RegisterUser): Observable<RegisterUser> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<RegisterUser>(this.path + 'user/register', registerUser, httpOptions).pipe(
      tap(data => {this.alertifyService.success(data['message'])}),
      catchError(this.handleError)
    );
  }



  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'user/login', loginUser, { headers })
      .subscribe(data => {
        this.saveToken(data['token']);
        localStorage.setItem(AUTHENTICATED_USER, loginUser.email);
        this.userToken = data['token'];
        this.alertifyService.success('Sisteme giriş yapıldı');
        this.router.navigateByUrl('/tasks');
      },
      (error) => {
        this.alertifyService.error('Hatalı kullanıcı adı veya şifre');
      }
      );
  }


  saveToken(token) {

    localStorage.setItem(this.TOKEN_KEY, token);

  }

  isUserLoggedIn() {

    const user = localStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(AUTHENTICATED_USER);
    this.alertifyService.error('Sistemden çıkış yapıldı');
  }


  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
    console.log(localStorage.getItem(this.TOKEN_KEY));
  }



  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
   errorMessage = 'bir hata oluştu' + err.error.message;
   } else {
     errorMessage = 'sistemsel bir hata';
   }

    return throwError (errorMessage);
  }


  }
