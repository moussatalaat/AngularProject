import { AuthService } from "./../../services/auth.service";
import { LoginModel } from "./../../Models/login-model";
import { Validators } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { RegisterServiceService } from "src/app/services/register-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: RegisterServiceService,
    private route: Router,
    private auth: AuthService
  ) {}

  public messageValidate = {
    email: {
      required: "Email is required"
    },
    password: {
      required: "Password is Required"
    }
  };

  message: string;
  loginForm: FormGroup;
  log: LoginModel;
  errorMessage: string;

  ngOnInit() {
    this.message = "";
    this.errorMessage = "";

    this.log = {
      email: "",
      password: "",
      rememberMe: false
    };

    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: false
    });
  }

  Login() {
    if (this.loginForm.valid) {
      this.validateLoginModel();
      this.service.UserLogin(this.log).subscribe(
        success => {
          const rem = !!this.loginForm.value.rememberMe;
          const email = this.loginForm.value.email;
          this.auth.installStorage(rem, email);
          this.route.navigate(["home"]);
        },
        err => {
          this.errorMessage = err.error;
        }
      );
    }
  }
  validateLoginModel() {
    this.log.email = this.loginForm.value.email;
    this.log.password = this.loginForm.value.password;
    this.log.rememberMe = this.loginForm.value.rememberMe;
  }
}
