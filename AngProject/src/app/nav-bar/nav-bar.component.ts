import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  constructor(
    private service: RegisterServiceService,
    private route:Router,
    private auth:AuthService
  ) {}


  title = "/assests/SekkaLogo.png"; // logo image

  ngOnInit() {
    const email = localStorage.getItem('email');
    const exp = localStorage.getItem('expDate');
    const role = localStorage.getItem('Role');
    if(email != null && exp != null && role != null){
    if(!!this.auth.CheckStorage()){
      this.Logout();
    }
  }
  }



  Logout(){
    this.service.Logout().subscribe(success => {
      localStorage.clear();
      console.log('Authenicatio false');
      this.route.navigate(['home']);
    }, err =>
      alert(err.error())
      );
  }

  isUserRegistered(){
    const email = !!localStorage.getItem('email');
    const exp = !!localStorage.getItem('expDate');
    const role = !!localStorage.getItem('Role');
    if(email && exp && role){
      return true;
    }
    return false;
  }
}
