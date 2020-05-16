import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-complain',
  templateUrl: './add-complain.component.html',
  styleUrls: ['./add-complain.component.css']
})
export class AddComplainComponent implements OnInit {

  constructor() { }

  public messageValidate = {
    companyName: {
      required: "Company Name is required",
    },
    transportaionTypeName: {
      required: "Transportaion Type is required",
    }
  };

  addComplainForm:FormGroup

  ngOnInit() {
  }



  AddComplain(){

  }
}
