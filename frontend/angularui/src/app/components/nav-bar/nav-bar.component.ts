import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/loginUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  loginUser: LoginUser = new LoginUser();
  logUser = false;

  login() {
    this.authService.login(this.loginUser);
    this.isAuthenticatedDynamically();

  }

  logOut() {
    this.authService.logOut();
    this.isAuthenticatedDynamically();
  }

  isAuthenticated() {
    return this.authService.isUserLoggedIn();
  }
  isAuthenticatedDynamically() {
    if (this.isAuthenticated() === true) {
      this.logUser = true;
    } else {
      this.logUser = false;
    }
  }

  ngOnInit() {

  }

}
