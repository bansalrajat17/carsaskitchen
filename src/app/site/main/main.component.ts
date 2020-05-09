import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { RouterLink } from '@angular/router';

//import { WOW } from 'wowjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ngwWowService: NgwWowService) { }

  ngOnInit() {

    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    
      if (location.pathname.replace(/^\//, '') == (this as any).pathname.replace(/^\//, '') && location.hostname == (this as any).hostname) {
        var target = $((this as any).hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (!$('#header').hasClass('header-scrolled')) {
              top_space = top_space - 20;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu').length) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');
    var main_nav_height = $('#header').outerHeight();
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop();
  
      nav_sections.each(function() {
        var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find('li').removeClass('menu-active menu-item-active');
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('menu-active menu-item-active');
        }
      });
    });  

  }

  ngAfterViewInit() {
    this.ngwWowService.init();
  }

}
