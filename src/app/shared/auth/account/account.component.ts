import { Component, OnInit } from '@angular/core';
import { NavigationBarComponent } from 'src/app/site/main/navigation-bar/navigation-bar.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  closeAccount(){
    this.dialog.closeAll();
  }

  

}
