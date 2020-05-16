import { ComplainsService } from './../../services/complains.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-compalins',
  templateUrl: './list-compalins.component.html',
  styleUrls: ['./list-compalins.component.css']
})
export class ListCompalinsComponent implements OnInit {

  constructor(private service: ComplainsService,
              private route:Router,
              ) { }

  ngOnInit() {
    this.service.ListComplanies();
  }



  DeleteComplain(id:number){

    console.log(id);

    this.service.deletComplain(id).subscribe(success =>{
      window.alert("Deleted Successfully");
      // this.route.navigate(["listCompanies"]);
      location.reload();
    }, err => console.log(err));
  }
}
