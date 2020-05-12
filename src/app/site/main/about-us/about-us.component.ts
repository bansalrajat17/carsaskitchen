import { Component, OnInit } from '@angular/core';
import { ContentSiteService } from '../../service/ContentSiteService';
import { ContentSite } from '../../orm/ContentSite';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  private contentSite: any;
  constructor(private contentSiteService: ContentSiteService) {

  }

  ngOnInit() {
    this.contentSiteService.findAllById(["1", "2", "3"]).subscribe(data => this.contentSite = data);
  }

}
