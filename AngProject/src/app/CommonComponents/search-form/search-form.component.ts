import { TripsService } from "./../../services/trips.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { SearchTrips } from "src/app/Models/SearchTrips-model";
import { DatePipe } from '@angular/common';
import { TripsData } from 'src/app/Models/TripsData';

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"],
})
export class SearchFormComponent implements OnInit {
  constructor(private service: TripsService, private fb: FormBuilder) {}

  searchModel: SearchTrips;
  serachForm: FormGroup;
  Data:TripsData[];
  TripData:[]

  ngOnInit() {
    this.service.CitiesList();
    this.serachForm = this.fb.group({
      CityFrom: ["", Validators.required],
      CityTo: ["", Validators.required],
      Date: ["", Validators.required],
    });
    this.searchModel = {
      FromId: null,
      ToId: null,
      DepDate: ""
    };

  }

  Search() {
  this.validateSearchModel();
  console.log(this.searchModel);
  this.service.Search(this.searchModel).subscribe((success:any) =>{
    this.Data = success;
    console.log(this.Data);
    //this.TripData = success;
    //console.log(this.TripData);
    // console.log("Success");
  }, err => console.log(err))

  }

  validateSearchModel(){
    this.searchModel.FromId = this.serachForm.value.CityFrom;
    this.searchModel.ToId = this.serachForm.value.CityTo;
    this.searchModel.DepDate = this.serachForm.value.Date;
    // this.searchModel.DepDate = new DatePipe('en-US').transform(this.serachForm.value.Date, 'dd-MM-yyyy')
  }
}
