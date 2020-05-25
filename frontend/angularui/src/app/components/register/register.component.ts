import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from 'src/app/models/registerUser';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  registerUser: RegisterUser = {
    name: '',
    email: '',
    password: ''
  };
  ngOnInit() {
  }

  register(registerUser) {
    this.authService.register(registerUser).subscribe(data => {});
  }
}
