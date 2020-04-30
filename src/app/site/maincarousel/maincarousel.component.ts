import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincarousel',
  templateUrl: './maincarousel.component.html',
  styleUrls: ['./maincarousel.component.scss']
})
export class MaincarouselComponent implements OnInit {
  carouselImagePaths: string[] = new Array("assets/images/homecarousel/TAX_NEW_YORK.jpg", "assets/images/homecarousel/PAN_CARD_CAROUSEL.png", "assets/images/homecarousel/GST.jpg");

  constructor() { }

  ngOnInit() { }

}

