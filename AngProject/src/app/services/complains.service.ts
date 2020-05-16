import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplainsService {

  constructor(private http: HttpClient,) { }

  baseUrl = 'https://localhost:44335/Complains/'
  headers = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
    withCredentials:true
  };

  Complanies:[]


  ListComplanies() {
    return this.http.get(this.baseUrl + 'Index', this.headers).toPromise().then(
      res=>{
        this.Complanies = res as [];
      }
    );
  }

  deletComplain(id:any){
    return this.http.delete(this.baseUrl + 'Delete/' + id, this.headers).pipe();
  }


  GetComplainDetails(id:any){
    return this.http.get(this.baseUrl + 'Details/' + id, this.headers).pipe();
  }

}
