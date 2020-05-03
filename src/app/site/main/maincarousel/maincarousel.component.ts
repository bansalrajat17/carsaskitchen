import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincarousel',
  templateUrl: './maincarousel.component.html',
  styleUrls: ['./maincarousel.component.scss']
})
export class MaincarouselComponent implements OnInit {
  private carouselImagePaths = [ "assets/images/banners/gst_banner_1.jpeg" , "assets/images/banners/gst_banner_2.jpeg","assets/images/banners/gst_banner_3.jpeg" , "assets/images/banners/gst_banner_4.jpeg" ];

  //carouselImagePaths: string[] = new Array("assets/images/homecarousel/TAX_NEW_YORK.jpg", "assets/images/homecarousel/PAN_CARD_CAROUSEL.png", "assets/images/homecarousel/GST.jpg");

  constructor() { }

  ngOnInit() { }

}

