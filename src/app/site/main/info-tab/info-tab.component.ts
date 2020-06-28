import { Component, OnInit, Input } from '@angular/core';
import { SsGstType } from '../../orm/SsGstType';
import { ServiceSiteService } from '../../service/ServiceSiteService';
import { SsGstTypeService } from '../../service/SsGstTypeService';
import { ActivatedRoute, Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ServiceSite } from '../../orm/ServiceSite';
//import { FaIconComponent } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-info-tab',
  templateUrl: './info-tab.component.html',
  styleUrls: ['./info-tab.component.scss']
})

export class InfoTabComponent implements OnInit {

  @Input() serviceSite: ServiceSite;
  private banners = ["assets/images/banners/gst_banner_4.jpeg", "assets/images/banners/gst_banner_2"];
  private ssGstTypeArray: Array<SsGstType> = [];
  private faCoffee = faCoffee;

  constructor(private serviceSiteService: ServiceSiteService, private ssGstTypeService: SsGstTypeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ssGstTypeService.findAll().subscribe(data => {
      this.ssGstTypeArray = data;
    });
  }
}
