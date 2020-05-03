import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from "../../service/ServiceService";

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.scss']
})
export class GstComponent implements OnInit {
  private serviceSite: any;
  private str  = "./" 
  private banners = [ "assets/images/banners/gst_banner_4.jpeg" , "assets/images/banners/gst_banner_2" ];

  constructor(private serviceService: ServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.serviceService.findById(this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe(data => this.serviceSite = data);
  }

}
