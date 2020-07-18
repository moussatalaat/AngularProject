import { SideBarComponent } from './CommonComponents/side-bar/side-bar.component';
import { ProfileComponent } from './User/profile/profile.component';
import { AddComplainComponent } from './Complain/add-complain/add-complain.component';
import { ListCompalinsComponent } from './Complain/list-compalins/list-compalins.component';
import { DetailsComponent } from './Companies/details/details.component';
import { AddCompanyComponent } from './Companies/add-company/add-company.component';
import { ListComponent } from './Companies/list/list.component';
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
import { AuthGuard } from './auth/auth.guard';
import { TripDetailsComponent } from './CommonComponents/trip-details/trip-details.component';
import { ComplainDetailsComponent } from './Complain/complain-details/complain-details.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerconfirm', component: RegisterconfirmComponent, canActivate:[AuthGuard]},
  {path: 'forgetpassword', component: ForgetPaswordComponent},
  {path: 'listCompanies', component: ListComponent},
  {path: 'listCompanies/companydetails/:id', component: DetailsComponent},
  {path: 'tripDetails/:id', component: TripDetailsComponent},
  {path: 'tripDetails/:id', component: TripDetailsComponent},
  {path: 'listComplains', component: ListCompalinsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'sidebar', component: SideBarComponent},
  {path: 'listComplains/addComplain/:id', component: AddComplainComponent},
  {path: 'listComplains/complaindetails/:id', component: ComplainDetailsComponent},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'passwordconfirm', component: PasswordconfirmComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
