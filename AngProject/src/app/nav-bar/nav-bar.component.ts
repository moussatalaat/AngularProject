import { CryptService } from './../services/crypt.service';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { Component, OnInit } from "@angular/core";
//import { CryptService } from '../services/crypt.service';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(
    private service: RegisterServiceService,
    private route:Router,
    private auth:AuthService,
    private crypt:CryptService
  ) {}


  title = "/assests/SekkaLogo.png"; // logo image
  //showNav = true;

  ngOnInit() {
    // this.service.getUsers().subscribe(succ =>{
    //   const data = succ
    //   console.log(data);
    // }, ex => console.log(ex))
    const email = localStorage.getItem('email');
    const UserName = localStorage.getItem('Username');
    const role = localStorage.getItem('Role');
    if(email != null && UserName != null && role != null){
    if(!!this.auth.CheckStorage()){
      this.Logout();
    }
  }
  }




  Logout(){
      localStorage.clear();
      console.log('Authenicatio false');
      this.route.navigate(['home']);
  }


  // Logout(){
  //   this.service.Logout().subscribe(success => {
  //     localStorage.clear();
  //     console.log('Authenicatio false');
  //     this.route.navigate(['home']);
  //   }, err =>
  //     alert(err.error())
  //     );
  // }


  isAdmin(){
    const role = this.crypt.Decrypt(localStorage.getItem('Role'));
    if (role === 'Admin'){
      return true;
    }
    return false
  }

  isUser(){
    const role = this.crypt.Decrypt(localStorage.getItem('Role'));
    if (role === 'User'){
      return true;
    }
    return false
  }


  isUserRegistered(){
    const email = !!localStorage.getItem('email');
    const UserName = !!localStorage.getItem('Username');
    const role = !!localStorage.getItem('Role');
    if(email && UserName && role){
      return true;
    }
    return false;
  }
}
