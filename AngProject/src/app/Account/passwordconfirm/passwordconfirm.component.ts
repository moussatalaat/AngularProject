import { ResetPasswordModel } from './../../Models/resetPassword';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptService } from 'src/app/services/crypt.service';

@Component({
  selector: 'app-passwordconfirm',
  templateUrl: './passwordconfirm.component.html',
  styleUrls: ['./passwordconfirm.component.css']
})
export class PasswordconfirmComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: RegisterServiceService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private encService:CryptService

  ) { }


  public messageValidate = {
    password: {
      required: "Password is Required",
      minlength: "Minimum 8 Characters",
      notValid: "Password must contan at least 1 Uppercase 1 Lowercase and 1 Alphanumeric char"
    },
    passwordConfirm: {
      required: "Password Confirmation Required",
      minlength: "Minimum 8 Characters",
      isMatch: "Password and Confirmation do not match"
    }
  };

  confirmForm:FormGroup;
  message: string;
  regex: RegExp;

passModel:ResetPasswordModel

  ngOnInit() {

    this.passModel= {
      Id: "",
      Token: "",
      Password: ""
    };

    this.activeRoute.queryParams.subscribe(param =>{
      var exists = false;
       this.passModel.Id = param['ID'];
       this.passModel.Token = param['Token'];
      if (this.passModel.Id && this.passModel.Token){
        var keys = Object.keys(localStorage);
        keys.forEach(element => {
          if(element !== null && element.includes('PassConfirmToken')){
            var item = localStorage.getItem(element);
            if(item !== null){
              var token = this.encService.Decrypt(item);
              if(token === this.passModel.Token){
                exists = true;
                return
              }
            }
          }

        });
        if(!exists){
          this.route.navigate(['home']).then(x => {window.location.reload();})
        }
      }else{
        this.route.navigate(['home']).then(x => {window.location.reload();})
      }
    }, ex => console.log(ex));

    this.confirmForm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ["", [Validators.required, Validators.minLength(8)]]
    });
  }




  isPasswordMatch() {
    if (this.confirmForm.value.password !== '' && this.confirmForm.value.passwordConfirm !== '') {
      if ((this.confirmForm.value.password !== this.confirmForm.value.passwordConfirm )&& this.confirmForm.value.password.length > 7 &&
        this.confirmForm.value.passwordConfirm.length > 7) {
        return true;
      }
    }
    return false;
  }

  isPasswordValid() {
    const pass = this.confirmForm.value.password;
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

  ResetPassword(){

    if(this.confirmForm.value.password !== null){
      this.passModel.Password = this.confirmForm.value.password;
      this.service.ApiResetPassword(this.passModel).subscribe(x=>{
        this.route.navigate(['login']);
        console.log("Success");
      },ex => console.log(ex));
    }

  }


}
