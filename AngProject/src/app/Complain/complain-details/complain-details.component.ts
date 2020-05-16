import { ComplainsService } from './../../services/complains.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplainDetails } from 'src/app/Models/ComplainDetails';

@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.component.html',
  styleUrls: ['./complain-details.component.css']
})
export class ComplainDetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private route: Router,
    private service: ComplainsService) { }


    CompDetails:ComplainDetails
  ngOnInit() {

    this.activeRoute.paramMap.subscribe(params =>{
      // console.log(params);
       const id = params.get('id');
       if (id != null){
         console.log('id: ' + id);
         this.service.GetComplainDetails(id).subscribe((success: any)=>{
           this.CompDetails = success;
          //  this.CompDetailsId = this.CompDetails.id;
           console.log(this.CompDetails);
           //this.filldataform();
           console.log('success');
         }, ex => console.log(ex));
       }
     }, ex => console.log(ex));
  }

}
