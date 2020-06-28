import { Component, OnInit } from "@angular/core";
import { ContentSite } from "../../orm/ContentSite";
import { ContentSiteService } from "../../service/ContentSiteService";

@Component({
  selector: "app-whyrf",
  templateUrl: "./whyrf.component.html",
  styleUrls: ["./whyrf.component.scss"],
})
export class WhyrfComponent implements OnInit {
  private contentSite: ContentSite;
  constructor(private contentSiteService: ContentSiteService) {}

  ngOnInit() {
    this.contentSiteService
      .findById(5)
      .subscribe((data) => (this.contentSite = data));
  }
}
