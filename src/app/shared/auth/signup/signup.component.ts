import { Component, OnInit } from '@angular/core';
import { UserMaster } from 'src/app/webapp/orm/UserMaster';
import { UserMasterService } from 'src/app/webapp/service/UserMasterService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private userMaster = new UserMaster("", "", "", "", "", "", new Date(), new Date(), "", "")

  hide = true;

  constructor(private userMasterService: UserMasterService) { }

  ngOnInit() {
  }

  saveUserMaster() {
    this.userMasterService.save(this.userMaster);
  }

}
