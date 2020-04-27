import { RegisterServiceService } from './../../services/register-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-registerconfirm',
  templateUrl: './registerconfirm.component.html',
  styleUrls: ['./registerconfirm.component.css']
})
export class RegisterconfirmComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private service: RegisterServiceService
  ) { }

  //showNav = false;

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(param =>{
      const id = param['ID'];
      const token = param['Token'];
      if (id && token){
        console.log('id: ' + id + 'token: ' +token);
        this.service.EmailConfirm(id,token).subscribe(x=>{
          console.log('success');
        }, ex => console.log(ex));
      }
    }, ex => console.log(ex));
  }

}
