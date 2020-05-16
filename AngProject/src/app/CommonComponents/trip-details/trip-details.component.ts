import { TripsService } from './../../services/trips.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-trip-details",
  templateUrl: "./trip-details.component.html",
  styleUrls: ["./trip-details.component.css"],
})
export class TripDetailsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute,
              private route: Router,
              private service:TripsService
              ) {}


  TripDetails:TripDetailsComponent


  ngOnInit() {


    this.activeRoute.paramMap.subscribe(params =>{
      // console.log(params);
       const id = params.get('id');
       if (id != null){
         console.log('id: ' + id);
         this.service.GetTripDetails(id).subscribe((success: any)=>{
           this.TripDetails = success;
          //  this.TripDetails = this.TripDetails.id;
           console.log(this.TripDetails);
           //this.filldataform();
           console.log('success');
         }, ex => console.log(ex));
       }
     }, ex => console.log(ex));
  }
}
