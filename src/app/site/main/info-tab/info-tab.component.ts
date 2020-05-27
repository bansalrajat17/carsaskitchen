import { Component, OnInit } from '@angular/core';
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

  private serviceSite: ServiceSite;
  private banners = ["assets/images/banners/gst_banner_4.jpeg", "assets/images/banners/gst_banner_2"];
  private ssGstTypeArray: Array<SsGstType> = [];
  private faCoffee = faCoffee;

  constructor(private serviceSiteService: ServiceSiteService, private ssGstTypeService: SsGstTypeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.serviceSiteService.findById(+this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe(data => this.serviceSite = data);
    this.ssGstTypeService.findAll().subscribe(data => {
      this.ssGstTypeArray = data;
    });
  }
}


     /** Just a small piece o JS just to gain some time, please read the comments and hope this will be  fine */


/* === Toggle the class just to show the vertical tab, I used this way just to do a "less HTML" 
			What I changed is just the CSS ===*/
     
     
      // $("button").click(function() {
    //    $(".container").toggleClass("verticalTab");
   // });

    /*** === The trick for the tabs + checkbox with the :target wont work, so I had to use a script just to
    	 change the background color for the active tab === */

    // I used the .find() instead of ("nav ul li a") because the .find is faster in jQuery	 
   
    //$("nav").find("a").click(function() {
   //     $("nav").find("a").removeClass("activeTab");
   //     $(this).addClass("activeTab");
  //  });

