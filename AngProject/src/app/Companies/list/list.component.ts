import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: CompanyService,
    private route:Router) { }

  ngOnInit() {
    this.service.ListCompanies();
  }



  DeleteCompany(id:number){

    console.log(id);

    this.service.deletCompany(id).subscribe(success =>{
      window.alert("Deleted Successfully");
      // this.route.navigate(["listCompanies"]);
      location.reload();
    }, err => console.log(err));
  }
}
