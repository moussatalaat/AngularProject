import { CompanyService } from 'src/app/services/company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyDetails } from 'src/app/Models/CompanyDetails-Model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public messageValidate = {
    name: {
      required: "Company Name is required",
    },
    transportaionTypeName: {
      required: "Transportaion Type is required",
    }
  };


  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private service: CompanyService
  ) { }

dataForm:FormGroup
CompDetails:CompanyDetails
//id;
CompDetailsId:number
  ngOnInit() {

    this.CompDetails = {
      id: null,
      name: "",
      transportationTypeId: null
    };

    this.dataForm = this.fb.group({
      id: [this.CompDetails.id,Validators.required],
      name: [this.CompDetails.name, Validators.required],
      type: [this.CompDetails.transportationTypeId, Validators.required],
    });

    this.activeRoute.paramMap.subscribe(params =>{
     // console.log(params);
      const id = params.get('id');
      if (id != null){
        console.log('id: ' + id);
        this.service.GetCompanyDetails(id).subscribe((success: any)=>{
          this.CompDetails = success;
          this.CompDetailsId = this.CompDetails.id;
          console.log(this.CompDetails);
          //this.filldataform();
          console.log('success');
        }, ex => console.log(ex));
      }
    }, ex => console.log(ex));
  }


  // filldataform(){
  //   this.dataForm.value.id = this.CompDetails.id;
  //   this.dataForm.value.name = this.CompDetails.name;
  //   this.dataForm.value.type = this.CompDetails.type;
  // }

  onSave(){
    //console.log(this.CompDetails);
    //this.ValidateCompDetailsModel();

      this.ValidateCompDetailsModel();
      console.log(this.CompDetails);
      this.service.EditCompany(this.CompDetails).subscribe(success =>{
        window.alert(success);
        this.route.navigate(["listCompanies"]);

      }, ex => console.log(ex));



  }

  ValidateCompDetailsModel(){
    this.CompDetails.id = this.CompDetailsId;
    this.CompDetails.name = this.dataForm.value.name;
    if(this.dataForm.value.transportaionTypeName === "Bus"){
      this.CompDetails.transportationTypeId = 1;
    }
    else if(this.dataForm.value.transportaionTypeName === "Train"){
      this.CompDetails.transportationTypeId = 2;
    }
    else {
      this.CompDetails.transportationTypeId = 3;
    }
  }


  GoBack(){
    this.route.navigate(["listCompanies"]);
  }
}
