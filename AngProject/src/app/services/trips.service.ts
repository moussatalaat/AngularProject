import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchTrips } from '../Models/SearchTrips-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private http: HttpClient,) { }


  baseUrl = 'https://localhost:44335/Trips/'
  headers = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
    withCredentials:true
  };

  //trips:[]
  Cities: []

  CitiesList() {
    return this.http.get(this.baseUrl + 'ListCities', this.headers).toPromise().then(
      res=>{
        this.Cities = res as [];
      }
    );
  }

  // Search(searchModel: SearchTrips): Observable<SearchTrips> {
  //   return this.http.post<SearchTrips>(this.baseUrl + 'Search', searchModel, this.headers).pipe();
  // }
  Search(searchModel: SearchTrips): Observable<SearchTrips> {
    return this.http.post<SearchTrips>(this.baseUrl + 'Search', searchModel, this.headers).pipe();
  }

  GetTripDetails(id:any) {
    return this.http.get(this.baseUrl + 'Details/' + id, this.headers).pipe();
  }

}
