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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterconfirmComponent } from './Account/registerconfirm/registerconfirm.component';
import { HttpConfigInterceptor } from './Interceptor/httpconfig.interceptor';
import { ForgetPaswordComponent } from './Account/forget-pasword/forget-pasword.component';
import { PasswordconfirmComponent } from './Account/passwordconfirm/passwordconfirm.component';
import { ListComponent } from './Companies/list/list.component';
import { DetailsComponent } from './Companies/details/details.component';
import { AddCompanyComponent } from './Companies/add-company/add-company.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SearchFormComponent } from './CommonComponents/search-form/search-form.component';
import { TripDetailsComponent } from './CommonComponents/trip-details/trip-details.component';
import { AddComplainComponent } from './Complain/add-complain/add-complain.component';
import { ListCompalinsComponent } from './Complain/list-compalins/list-compalins.component';
import { ComplainDetailsComponent } from './Complain/complain-details/complain-details.component';
import { AddReviewComponent } from './Review/add-review/add-review.component';
import { ReviewDetailsComponent } from './Review/review-details/review-details.component';
import { ListReviewsComponent } from './Review/list-reviews/list-reviews.component';
//import { DatePipe } from '@angular/common';
//import {MatDatepickerModule, MatNativeDateModule} from '@angular/material'

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
    UserHomeComponent,
    SearchFormComponent,
    TripDetailsComponent,
    AddComplainComponent,
    ListCompalinsComponent,
    ComplainDetailsComponent,
    AddReviewComponent,
    ReviewDetailsComponent,
    ListReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    RegisterServiceService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
