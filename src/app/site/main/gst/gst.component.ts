import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServiceSiteService } from "../../service/ServiceSiteService";
import { SsGstTypeService } from "../../service/SsGstTypeService";
import { SsGstType } from "../../orm/SsGstType";
import { MatDialog } from "@angular/material/dialog";
import { AccountComponent } from "src/app/shared/auth/account/account.component";

@Component({
  selector: "app-gst",
  templateUrl: "./gst.component.html",
  styleUrls: ["./gst.component.scss"],
})
export class GstComponent implements OnInit {
  private serviceSite: any;
  private banners = [
    "assets/images/banners/gst_banner_4.jpeg",
    "assets/images/banners/gst_banner_2",
  ];
  private ssGstTypeArray: Array<SsGstType> = [];

  constructor(
    private serviceSiteService: ServiceSiteService,
    private ssGstTypeService: SsGstTypeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.serviceSiteService
      .findById(+this.activatedRoute.snapshot.paramMap.get("id"))
      .subscribe((data) => {
        this.serviceSite = data;
      });
  }

  openAccount() {
    this.dialog.open(AccountComponent);
  }
}
