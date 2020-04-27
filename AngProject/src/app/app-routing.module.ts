import { PasswordconfirmComponent } from './Account/passwordconfirm/passwordconfirm.component';
import { ForgetPaswordComponent } from './Account/forget-pasword/forget-pasword.component';
import { RegisterconfirmComponent } from './Account/registerconfirm/registerconfirm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerconfirm', component: RegisterconfirmComponent},
  {path: 'forgetpassword', component: ForgetPaswordComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'passwordconfirm', component: PasswordconfirmComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
