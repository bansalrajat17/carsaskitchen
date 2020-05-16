import { Component, OnInit } from '@angular/core';
import { STestimonialService } from 'src/app/site/service/STestimonialService';
import { STestimonial } from 'src/app/site/orm/STestimonial';

@Component({
  selector: 'app-mono-testimonial',
  templateUrl: './mono-testimonial.component.html',
  styleUrls: ['./mono-testimonial.component.scss']
})
export class MonoTestimonialComponent implements OnInit {

  private sTestimonialArray: Array<STestimonial> = [];
  private defaultImagePath = "../../../";

  constructor(private sTestimonialService: STestimonialService) { }

  ngOnInit() {
    this.sTestimonialService.findAll().subscribe(data => this.sTestimonialArray = data);
  }

}
