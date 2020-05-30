import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { RouterLink } from '@angular/router';

//import { WOW } from 'wowjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ngwWowService: NgwWowService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.ngwWowService.init();
  }

}
