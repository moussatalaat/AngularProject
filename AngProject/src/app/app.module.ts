import { AuthService } from './services/auth.service';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './Account/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Account/register/register.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterconfirmComponent } from './Account/registerconfirm/registerconfirm.component';
import { HttpConfigInterceptor } from './Interceptor/httpconfig.interceptor';
import { ForgetPaswordComponent } from './Account/forget-pasword/forget-pasword.component';
import { PasswordconfirmComponent } from './Account/passwordconfirm/passwordconfirm.component';
import { ListComponent } from './Companies/list/list.component';
import { DetailsComponent } from './Companies/details/details.component';
import { AddCompanyComponent } from './Companies/add-company/add-company.component';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    FooterMenuComponent,
    RegisterconfirmComponent,
    ForgetPaswordComponent,
    PasswordconfirmComponent,
    ListComponent,
    DetailsComponent,
    AddCompanyComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterServiceService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
