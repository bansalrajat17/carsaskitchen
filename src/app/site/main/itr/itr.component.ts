import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceSiteService } from "../../service/ServiceSiteService";

@Component({
  selector: 'app-itr',
  templateUrl: './itr.component.html',
  styleUrls: ['./itr.component.scss']
})
export class ItrComponent implements OnInit {
  private serviceSite: any;

  constructor(private serviceSiteService: ServiceSiteService, private activatedRoute: ActivatedRoute, private router: Router) {
   
  }

  ngOnInit() {
    this.serviceSiteService.findById(this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe(data => this.serviceSite = data);
  }
}
