import { Component, OnInit } from '@angular/core';
//import { WOW } from 'wowjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    new WOW().init();
  }

}
