import { Component, OnInit } from '@angular/core';
import { UserMaster } from 'src/app/webapp/orm/UserMaster';
import { UserMasterService } from 'src/app/webapp/service/UserMasterService';
import { Router } from '@angular/router';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userMaster = new UserMaster("", "", "", "", "", "", new Date(), new Date(), "", "");
  private loginResult: any;
  hide = true;

  constructor(public userMasterService: UserMasterService, public router: Router, public accountComponent: AccountComponent) {
  }

  ngOnInit() {
  }

  login() {
    this.userMasterService.authenticate(this.userMaster).subscribe(data => this.loginResult = data);
    let userMasterDb = new UserMaster("", "", "", "", "", "", new Date(), new Date(), "", "");
    this.userMasterService.get(this.userMaster).subscribe(data => userMasterDb = data);
    this.accountComponent.closeAccount();
    this.router.navigate(['dashboard']);
    alert(`SUCCESS ${userMasterDb}`);
  }

}
