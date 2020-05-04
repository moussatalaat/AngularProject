import { Router } from '@angular/router';
import { Component, OnInit, ComponentFactory } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddCompany } from 'src/app/Models/AddCompany-model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {


  public messageValidate = {
    companyName: {
      required: "Company Name is required",
    },
    transportaionTypeName: {
      required: "Transportaion Type is required",
    }
  };
  message: string;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private service:CompanyService,
    private route:Router
    ) { }

  addCompanyForm: FormGroup;

company:AddCompany

  ngOnInit() {

    this.company = {
      name: "",
      transportationTypeId: null,

    };

    this.addCompanyForm = this.fb.group({
      companyName: ["", Validators.required],
      //transportaionTypeName:["",Validators.required]
    });
  }


  AddCompany(){
    if(this.addCompanyForm.valid){
      this.validateCompanyModel();
      console.log(this.company);
      this.service.AddCompany(this.company).subscribe(
        success =>{
          window.alert('Company Add Successfully');
          this.addCompanyForm.reset();
          this.route.navigate(["listCompanies"]);
        },err =>{
          this.errorMessage = err.error;
        })

    }

  }



  validateCompanyModel(){
    this.company.name = this.addCompanyForm.value.companyName;
    if(this.addCompanyForm.value.transportaionTypeName === "Bus"){
      this.company.transportationTypeId = 1;
    }
    else if(this.addCompanyForm.value.transportaionTypeName === "Train"){
      this.company.transportationTypeId = 2;
    }
    else {
      this.company.transportationTypeId = 3;
    }
    //if(this.addCompanyForm.value.transportaionTypeName === "Plane")
  }
}
