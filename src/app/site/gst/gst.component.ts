import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from "../service/ServiceService";

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.scss']
})
export class GstComponent implements OnInit {
  private serviceSite: any;

  constructor(private serviceService: ServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.serviceService.findById(this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe(data => this.serviceSite = data);
  }

}
