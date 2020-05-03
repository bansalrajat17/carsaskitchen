import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerheader',
  templateUrl: './innerheader.component.html',
  styleUrls: ['./innerheader.component.scss']
})
export class InnerheaderComponent implements OnInit {
  
  headerLogoPath:string = "assets/logos/RETURN_FILING.png";

  constructor() { }

  ngOnInit() {
  }

}
