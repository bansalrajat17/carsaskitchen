import { Component, OnInit } from '@angular/core';
import { GstComponent } from '../gst/gst.component';
import { ServiceSiteService } from '../../service/ServiceSiteService';
import { ActivatedRoute, Router } from '@angular/router';
import { SsGstType } from '../../orm/SsGstType';
import { SsGstTypeService } from '../../service/SsGstTypeService';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})

export class InformationComponent implements OnInit {
  private tc_breakpoint = 767;
  private serviceSite: any;
  private ssGstTypeArray: Array<SsGstType> = [];


  constructor(private serviceSiteService: ServiceSiteService, private ssGstTypeService: SsGstTypeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  resize_vertical_accordions(tc_breakpoint: number) {
    tc_breakpoint = this.tc_breakpoint;
    "use strict";
    $('.vertab-container').each(function (i, e) {
      var index, menu, contents;
      var container = $(this);

      // Setup current tab/panel (default to first tab/panel)
      index = $(this).data('current');
      if (index === undefined) {
        $(this).data('index', 0);
        index = 0;
      }

      // If using a desktop-size screen, manage as tabbed panels
      if ($(window).width() > tc_breakpoint) {
        // Reset panels heights (Bootstrap's accordions sets heights to zero)
        $(this).find('.panel-collapse.collapse').css('height', 'auto');

        // Clean tab-navigation styles
        menu = $(this).find('.vertab-menu .list-group a');
        menu.removeClass("active");

        // Clean tab-panels styles
        contents = $(this).find(".vertab-accordion .vertab-content");
        contents.removeClass("active");

        // Update tab navigation and panels styles
        menu.eq(index).addClass('active');
        contents.eq(index).addClass("active");

        // Update tab navigation's height to match current tab
        $(this).children('.vertab-menu').css('min-height', $(this).children('.vertab-accordion').height() + 20);
      }
      else // If using a mobile device (phone + tablets), manage as accordion
      {
        // Close all panels
        ($(this).find('.vertab-content .panel-collapse.collapse') as any).collapse('hide');

        // Clean styles from headings
        $(this).find('.vertab-content .panel-heading').removeClass('active');

        // Wait until all panels have collapsed and mark the one the user selected as active.
        setTimeout(function () {
          $(container).find('.vertab-content .panel-heading').eq(index).addClass("active");
          ($(container).find('.vertab-content .panel-collapse.collapse').eq(index) as any).collapse('show');
        }, 1000);

      }
    });
  }

  ngOnInit() {
    let tc_breakpoint = this.tc_breakpoint;
    let rva_func = this.resize_vertical_accordions;
    (function ($) {
      $(document).ready(function () {
        // Switch tabs and update panels classes - Adjust container height

        $(".vertab-container .vertab-menu .list-group a").click(function (e) {
          var index = $(this).index();
          var container = $(this).parents('.vertab-container');
          var accordion = container.find('.vertab-accordion');
          var contents = accordion.find(".vertab-content");

          e.preventDefault();

          $(this).addClass("active");
          $(this).siblings('a.active').removeClass("active");

          contents.removeClass("active");
          contents.eq(index).addClass("active");
          container.data('current', index);

          //Adjust container height
          $(this).parents('.vertab-menu').css('min-height', $(container).children('.vertab-accordion').height() + 20);
        });

        // Collapse accordion panels (except the one the user just opened) and add "active" class to the panel heading 
        $('.vertab-accordion').on('show.bs.collapse', '.collapse', function () {
          var accordion, container, current, index;

          accordion = $(this).parents('.vertab-accordion');
          container = accordion.parents('.vertab-container');

          accordion.find('.collapse.in').each(function () {
            ($(this) as any).collapse('hide');
          });

          $(this).siblings('.panel-heading').addClass('active');

          current = accordion.find('.panel-heading.active');
          index = accordion.find('.panel-heading').index(current);

          container.data('current', index);
        });

        // Remove "active" class from heading when collapsing the current panel 
        $('.vertab-accordion .panel-collapse').on('hide.bs.collapse', function () {
          $(this).siblings('.panel-heading').removeClass('active');
        });


        // Manage resize / rotation events
        $(window).on("resize orientationchange", function () {
          rva_func.apply(tc_breakpoint);
        });

        // Scroll accordion to show the current panel
        $(".vertab-accordion .panel-heading").click(function () {
          var el = this;
          setTimeout(function () { $("html, body").animate({ scrollTop: $(el).offset().top - 10 }, 1000); }, 500);

          return true;
        });

        //Initial Panels setup
        rva_func.apply(tc_breakpoint);
      });
    })($);
    this.serviceSiteService.findById(+this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe(data => this.serviceSite = data);

    this.ssGstTypeService.findAll().subscribe(data => {
      this.ssGstTypeArray = data;
    });
  }

}


