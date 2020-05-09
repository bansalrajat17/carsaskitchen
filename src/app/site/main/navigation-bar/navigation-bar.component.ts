import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountComponent } from '../../../shared/auth/account/account.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    
     // Initiate superfish on nav menu
     (<any>$('.nav-menu')).superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });

   
  }



  openAccount(){
    this.dialog.open(AccountComponent);
  }

}
