import { Component, OnInit, Input } from '@angular/core';
import { SsPackage } from '../../orm/SsPackage';
import { ServiceSite } from '../../orm/ServiceSite';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  @Input() ssPackageList:SsPackage[];
  @Input() name:string;

  constructor() { }

  ngOnInit() {
  }

}
