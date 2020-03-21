import { RegisterModel } from './../../Models/register-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private service : RegisterServiceService
    ) { }

  userForm: FormGroup;
  reg: RegisterModel;
  regex: RegExp;

  messageValidate = {
    userName: {
      required: "User Name is required"
    },
    email: {
      required: "Email is required",
      notValid: "Invalid Email Address"
    },
    password: {
      required: "Password is Required",
      minlength: "Minimum 8 Characters",
      notValid: "Password must contan at least 1 Uppercase 1 Lowercase and 1 Alphanumeric char"
    },
    passwordConfim: {
      required: "Password Confirmation Required",
      minlength: "Minimum 8 Characters",
      isMatch: "Password and Confirmation do not match"
    }
  }

  ngOnInit() {
    this.reg = {
      userName: '',
      email: '',
      password: ''
    }
   this.userForm = this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(8)]],
   });
  }

  register() {
    if(this.userForm.valid){
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(success => {
        alert("Registeration Success");
      }, error => alert(error.error));
    }
  }
  validateRegisterModel() {
    this.reg.userName = this.userForm.value.userName;
    this.reg.email = this.userForm.value.email;
    this.reg.password = this.userForm.value.password;
  }

  isPasswordMatch(){
    if(this.userForm.value.password !== '' && this.userForm.value.passwordConfirm !== ''){
      if((this.userForm.value.password !== this.userForm.value.passwordConfirm &&
        this.userForm.value.password.length > 7 && this.userForm.value.passwordConfirm.length > 7)){
        return true
      }
    }
    return false
  }

  isPasswordValid(){
     const pass = this.userForm.value.password;
     if(pass !== '' && pass.length >= 7){
      this.regex = new RegExp('[a-z]');
      if(!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 Lowercase character';
      }
      this.regex = new RegExp('[A-Z]');
      if(!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 Uppercase character';
      }
      this.regex = new RegExp('!@#$%^&*()_+{}');
      if(!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 Special character';
      }
      this.regex = new RegExp('\d+');
      if(!this.regex.test(pass)){
        this.messageValidate.password.notValid = 'password must have at least 1 number';
      }
   }
    return true;
 }

}
//!pass.match(/[\d(a-z)A-Z!@#$%^&*()_+]/
