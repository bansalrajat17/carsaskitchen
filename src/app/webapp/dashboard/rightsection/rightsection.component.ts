import { Component, OnInit } from '@angular/core';
import { UserMasterService } from '../../service/UserMasterService';

@Component({
  selector: 'app-rightsection',
  templateUrl: './rightsection.component.html',
  styleUrls: ['./rightsection.component.scss']
})
export class RightsectionComponent implements OnInit {

  constructor(public userMasterService:UserMasterService) { }

  ngOnInit() {
  }

  logout(){
    this.userMasterService.logOut();
  }


}
