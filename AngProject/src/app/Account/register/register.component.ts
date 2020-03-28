import { Users } from './../../Models/user';
import { RegisterModel } from "./../../Models/register-model";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterServiceService } from "src/app/services/register-service.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  public messageValidate = {
    userName: {
      required: "User Name is required",
      used:""
    },
    email: {
      required: "Email is required",
      notValid: "Invalid Email Address",
      used:""
    },
    password: {
      required: "Password is Required",
      minlength: "Minimum 8 Characters",
      notValid:
        "Password must contan at least 1 Uppercase 1 Lowercase and 1 Alphanumeric char"
    },
    passwordConfirm: {
      required: "Password Confirmation Required",
      minlength: "Minimum 8 Characters",
      isMatch: "Password and Confirmation do not match"
    }
  };

  constructor(
    private fb: FormBuilder,
    private service: RegisterServiceService
  ) {}

  userForm: FormGroup;
  reg: RegisterModel;
  regex: RegExp;
  users: Users[];
  message: string;

  ngOnInit() {
    this.message = '';
    this.users = [];
    this.reg = {
      userName: "",
      email: "",
      password: ""
    };
    this.userForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(8)]]
    });

    this.allUsers();
  }

  register() {
    if (this.userForm.valid) {
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(
        success => {
          this.message = 'Registeration Succeded Please confirm your email';
          this.userForm.value.password = '';
          // this.message = 'Registeration Succeded Please confirm your email';
        },
        error => alert(error.error)
      );
    }
  }
  validateRegisterModel() {
    this.reg.userName = this.userForm.value.userName;
    this.reg.email = this.userForm.value.email;
    this.reg.password = this.userForm.value.password;
  }

  isPasswordMatch() {
    if (this.userForm.value.password !== '' && this.userForm.value.passwordConfirm !== '') {
      if ((this.userForm.value.password !== this.userForm.value.passwordConfirm )&& this.userForm.value.password.length > 7 &&
        this.userForm.value.passwordConfirm.length > 7) {
        return true;
      }
    }
    return false;
  }

  isPasswordValid() {
    const pass = this.userForm.value.password;
    if(pass != '' || pass.length >= 7){
      this.regex = new RegExp("[a-z]");
      if (!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 Lowercase character';
        return false;
      }
      this.regex = new RegExp("[A-Z]");
      if (!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 Uppercase character';
        return false;
      }
      this.regex = new RegExp("[~!@#$%^&*()+<>{}]");
      if (!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 Special character';
        return false;
      }
      this.regex = new RegExp("[0-9]");
      if (!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least a number character';
        return false;
      }
    }
    return true;
  }

  allUsers(){
    this.service.GetAllUsers().subscribe(list => {
      this.users = list;
      //console.log(this.users);
    },
    error => alert(error.error)
    );
  }

  isUserNameExists(){
    for(const name of this.users){
      const nameUser = this.userForm.value.userName;
      if(name.userName === nameUser){
        this.messageValidate.userName.used = 'This Username is Already used';
        return true;
      }
    }
    return false;
  }

  isEmailExists(){
    for(const email of this.users){
      const em = this.userForm.value.email;
      if(email.email === em){
        this.messageValidate.email.used = 'This Email is Already used';
        return true;
      }
    }
    return false;
  }

}
