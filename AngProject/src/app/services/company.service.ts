import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddCompany } from '../Models/AddCompany-model';
import { Observable } from 'rxjs';
import { CompanyDetails } from '../Models/CompanyDetails-Model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient,) { }


  baseUrl = 'https://localhost:44335/Companies/'
  headers = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
    withCredentials:true
  };

  Companies: []

  ListCompanies() {
    //var tokenHeader =new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('token')})
    return this.http.get(this.baseUrl + 'Index', this.headers).toPromise().then(
      res=>{
        this.Companies = res as [];
      }
    );// { withCredentials:true }
  }


  AddCompany(company: AddCompany): Observable<AddCompany> {
    return this.http.post<AddCompany>(this.baseUrl + 'AddCompany', company, this.headers).pipe();
  }

  GetCompanyDetails(id:any) {
    return this.http.get(this.baseUrl + 'Details/' + id, this.headers).pipe();
  }

  deletCompany(id:any) {
    return this.http.delete(this.baseUrl + 'Delete/' + id, this.headers).pipe();
  }

  EditCompany(company: CompanyDetails): Observable<CompanyDetails> {
    return this.http.put<CompanyDetails>(this.baseUrl + 'Edit/' + company.id, company, this.headers).pipe();
  }
}
