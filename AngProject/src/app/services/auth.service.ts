import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CryptService } from './crypt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private crypt: CryptService
  ) { }


  public installStorage(rem: boolean, email: string){
          const day = new Date();
          if(rem){
            day.setDate(day.getDay() + 10);
          }else{
            day.setMinutes(day.getMinutes() + 30);
          }

          localStorage.setItem('email', this.crypt.Encrypt(email));
          localStorage.setItem('expDate', this.crypt.Encrypt(day.toString()));

          this.GetUserRole(email).subscribe(success => {
            localStorage.setItem('Role',this.crypt.Encrypt(success));
          }, err => alert(err));
  }


  CheckStorage(){

        const email = this.crypt.Decrypt(localStorage.getItem('email'));
        const exp = this.crypt.Decrypt(localStorage.getItem('expDate'));
        const role = this.crypt.Decrypt(localStorage.getItem('Role'));

       if (email != null && exp != null && role != null){
          this.ValidateUser(email, role).subscribe(success => {
            if(!this.IsExpireDate(exp)){
               console.log('user is Authorized')
              return true;
            }
          }, err => console.log(err));
        }

    return false;
  }


  IsExpireDate(day: string){
    const dateNow = new Date();
    const dateExpire = new Date(Date.parse(day));
    if (dateExpire < dateNow){
      return true;
    }
    return false;
  }


  GetUserRole(email: string) {
    return this.http.get('https://localhost:44335/Account/GetRoleName/' + email, {responseType : 'text'}).pipe();
  }

  ValidateUser(email: string, role: string) {
    return this.http.get('https://localhost:44335/Account/CheckUserClaims/' + email + '&' + role, { withCredentials: true }).pipe(); //
  }
}
