import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { SsFaq } from "../../orm/SsFaq";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  @Input() ssFaqList: SsFaq[];

  constructor() {}

  ngOnInit() {
    $("#faqAccordion").on("hide.bs.collapse show.bs.collapse", (e) => {
      $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
    });
  }
}
