import { CryptService } from './../../services/crypt.service';
import { FormBuilder } from '@angular/forms';
import { RegisterServiceService } from './../../services/register-service.service';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-pasword',
  templateUrl: './forget-pasword.component.html',
  styleUrls: ['./forget-pasword.component.css']
})
export class ForgetPaswordComponent implements OnInit {

  constructor(
    private service:RegisterServiceService,
    private fb: FormBuilder,
    private encService:CryptService
  ) { }

  Message:string;
  forgetForm:FormGroup;

  public messageValidate = {
    email: {
      required: "Email is required",
      patt: "the email entered is not correct"
    }
  };

  ngOnInit() {
    this.Message = null;

    this.forgetForm = this.fb.group({
      email: ["", Validators.required],

    });
  }




  RequestPassword(){
    var email = this.forgetForm.value.email;
    if(email !== null || email !== ""){
      this.service.ForgetPassword(email).subscribe(x=>{
        var i = 0;
        var exists = false;
        var PassConfirmToken = Object.values(x).toString();
        while (localStorage.getItem('PassConfirmToken' + i) !== null) {
          i++;
          if(localStorage.getItem('PassConfirmToken' + i) === null){
            localStorage.setItem('PassConfirmToken' + i, this.encService.Encrypt(PassConfirmToken));
            exists = true;
            break;
          }
        }
        if(!exists){
          localStorage.setItem('PassConfirmToken' + i, this.encService.Encrypt(PassConfirmToken));
        }
        this.Message = 'a mail was sent to this email address, Please Check your Mail Box';
        this.forgetForm.reset();
      }, ex => console.log(ex));
    }
  }
}
