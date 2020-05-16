import { Component, OnInit } from '@angular/core';
import { TestimonialSiteService } from '../../service/TestimonialSiteService';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  
  constructor(private testimonialSiteService: TestimonialSiteService) { }

  ngOnInit() {
  }

}
