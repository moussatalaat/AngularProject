import { tokenParams } from './../../Models/tokenParams';
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

  //email: string;
  //password:string;
  tokenparam:tokenParams;
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
        (success: any) => {
          this.tokenparam= success;
          //console.log(this.tokenparam);
          this.service.AccessToken = this.tokenparam.token;
          //console.log(this.service.AccessToken);

          //const rem = !!this.loginForm.value.rememberMe;
          //const email = this.loginForm.value.email;
          this.auth.installStorage(this.tokenparam);
          this.route.navigate(["home"]);
        },
        err => {
          this.errorMessage = err.error;
        }
      );
    }
  }

  // Login(){
  //   if (this.loginForm.valid){
  //     this.validateLoginModel();
  //     this.service.
  //   }


  // validateLoginModel() {
  //   this.email = this.loginForm.value.email;
  //   this.password = this.loginForm.value.password;
  //   //this.log.rememberMe = this.loginForm.value.rememberMe;
  // }

  validateLoginModel() {
    this.log.email = this.loginForm.value.email;
    this.log.password = this.loginForm.value.password;
    this.log.rememberMe = this.loginForm.value.rememberMe;
  }
}
