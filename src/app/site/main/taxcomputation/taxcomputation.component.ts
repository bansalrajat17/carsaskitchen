import { Component, OnInit, Input } from "@angular/core";
import { SsStc } from "../../orm/SsStc";

@Component({
  selector: "app-taxcomputation",
  templateUrl: "./taxcomputation.component.html",
  styleUrls: ["./taxcomputation.component.scss"],
})
export class TaxcomputationComponent implements OnInit {
  @Input() ssStcList: SsStc[];

  constructor() {}

  ngOnInit() {
    
  }
}
