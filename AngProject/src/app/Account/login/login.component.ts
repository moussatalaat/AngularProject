import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: RegisterServiceService
  ) { }

  message: string;
  loginForm: FormGroup;

  ngOnInit() {
    this.message = '';

    // this.login = {
    //   userName: "",
    //   email: "",
    //   password: ""
    // };
    this.loginForm = this.fb.group({
      email: "",
      password: "",
      remember: false
    });
  }


  Login() {

  }
}
