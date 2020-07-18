import { Common } from './../../Global';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [ Common ]
})
export class SideBarComponent implements OnInit {

  constructor(public globals: Common) { }

  globalNavWidth : number

  ngOnInit() {
    document.body.classList.add("sideBarLoaded");

  this.updateNaveWidth();
  }


  updateNaveWidth(){
    this.globals.navWidth = 85;
    // this.globalNavWidth = this.globals.navWidth
    // console.log(this.globalNavWidth) ;
 }
}
