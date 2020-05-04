import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: CompanyService) { }

  ngOnInit() {
    this.service.ListCompanies();
  }



  DeleteCompany(id:number){

    console.log(id);

    this.service.deletCompany(id).subscribe(success =>{
      window.alert("Deleted Successfully");

    }, err => console.log(err));
  }
}
