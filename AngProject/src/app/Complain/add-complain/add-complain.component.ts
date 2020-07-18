import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplainsService } from 'src/app/services/complains.service';

@Component({
  selector: 'app-add-complain',
  templateUrl: './add-complain.component.html',
  styleUrls: ['./add-complain.component.css']
})
export class AddComplainComponent implements OnInit {


  constructor(private activeRoute: ActivatedRoute,
    private route: Router,
    private service: ComplainsService) { }

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
    // this.activeRoute.paramMap.subscribe(params =>{
    //   // console.log(params);
    //    const id = params.get('id');
    //    if (id != null){
    //      console.log('id: ' + id);
    //      this.service.addComplain().subscribe((success: any)=>{
    //        this.CompDetails = success;
    //       //  this.CompDetailsId = this.CompDetails.id;
    //        console.log(this.CompDetails);
    //        //this.filldataform();
    //        console.log('success');
    //      }, ex => console.log(ex));
    //    }
    //  }, ex => console.log(ex));
  }



  AddComplain(){

  }
}
