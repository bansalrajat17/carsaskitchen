import { Component, OnInit } from "@angular/core";
import { STestimonialService } from "src/app/site/service/STestimonialService";
import { STestimonial } from "src/app/site/orm/STestimonial";

@Component({
  selector: "app-mono-testimonial",
  templateUrl: "./mono-testimonial.component.html",
  styleUrls: ["./mono-testimonial.component.scss"],
})
export class MonoTestimonialComponent implements OnInit {
  private sTestimonialArray: Array<STestimonial> = [];
  private defaultImagePath = "../../../../../assets/images/testimonial/";

  constructor(private sTestimonialService: STestimonialService) {}

  chunks(array, size) {
    let results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  ngOnInit() {
    this.sTestimonialService
      .findAll()
      .subscribe(
        (data) =>
          (this.sTestimonialArray = this.chunks(data, 3))
      );
  }
}
