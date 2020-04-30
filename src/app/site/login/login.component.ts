import { Component, OnInit } from '@angular/core';
import { UserMaster } from 'src/app/webapp/orm/UserMaster';
import { UserMasterService } from 'src/app/webapp/service/UserMasterService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userMaster = new UserMaster("", "", "", "", "", "", new Date(), new Date(), "", "");
  private loginResult: any;
  hide = true;

  constructor(private userMasterService: UserMasterService) {
  }

  ngOnInit() {
  }

  login() {
    this.userMasterService.authenticate(this.userMaster).subscribe(data => this.loginResult = data);
    let userMasterDb = new UserMaster("","","","","","",new Date(),new Date(),"","");
    this.userMasterService.get(this.userMaster).subscribe(data => userMasterDb = data);
    alert(`SUCCESS ${userMasterDb}`);
  }

}
