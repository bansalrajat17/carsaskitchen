import { Component, OnInit } from '@angular/core';
import { UserMaster } from 'src/app/webapp/orm/UserMaster';
import { UserMasterService } from 'src/app/webapp/service/UserMasterService';
import { Router } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import Swal from 'sweetalert2';

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
    this.userMasterService.authenticate(this.userMaster).toPromise().then(() => {
      this.accountComponent.closeAccount();
      Swal.fire({
        title: 'SUCCESS!',
        text: 'REDIRECTING TO YOUR ACCOUNT',
        icon: 'success'
      }).then(() => { 
        this.router.navigate(['dashboard']);
      });
    }).catch(function (e) {
      Swal.fire({
        title: 'Error!',
        text: 'AUTHENTICATION FAILED',
        icon: 'error',
        confirmButtonText: 'RETRY'
      });
    });
  }
}
