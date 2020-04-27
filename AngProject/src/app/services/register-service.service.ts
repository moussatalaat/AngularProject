import { ResetPasswordModel } from './../Models/resetPassword';
import { tokenParams } from './../Models/tokenParams';
import { LoginModel } from './../Models/login-model';
import { FormGroup } from '@angular/forms';

import { RegisterModel } from './../Models/register-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(
    private http: HttpClient,

    ) { }

  baseUrl = 'https://localhost:44335/Account/'
  headers = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
    withCredentials:true
  };
  AccessToken = "";

  Register(reg: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(this.baseUrl + 'Register', reg, this.headers).pipe();
  }


//

  // Login(email: string, password:string): Observable<tokenParams> {

  //   let newHeader = new Headers({'Content-Type' : 'application/x-www-form-urlencoded  '});
  //   var data = "grant_type=password&email=" + email + "&password" + password;
  //   return this.http.post(this.baseUrl , data, { headers: newHeader})

  //   .map(res => res.json());
  // }

  UserLogin(log: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.baseUrl + 'Login', log, this.headers).pipe();
  }

  // Logout() {
  //   var tokenHeader =new HttpHeaders({'Authorization':'Bearer '+ this.AccessToken})
  //   return this.http.get(this.baseUrl + 'Logout', {headers : tokenHeader}).pipe();// { withCredentials:true }
  // }


  getUsers() {
    //var tokenHeader =new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('token')})
    return this.http.get(this.baseUrl + 'GetAllUsers', this.headers).pipe();// { withCredentials:true }
  }

  EmailConfirm(id: string,token: string){
    return this.http.get(this.baseUrl + 'RegisterationConfirm?ID=' + id + '&Token=' + token).pipe();
  }

  ForgetPassword(email:string){
    return this.http.get(this.baseUrl + 'ForgetPassword/' + email ).pipe();
  }

  ApiResetPassword(passModel: ResetPasswordModel): Observable<ResetPasswordModel>{
    return this.http.post<ResetPasswordModel>(this.baseUrl + 'ResetPassword' , passModel, this.headers).pipe();
  }
}
