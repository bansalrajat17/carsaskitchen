import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // jQuery counterUp (used in Facts section)

  (<any>$('[data-toggle="counter-up"]')).counterUp({
    delay: 10,
    time: 1000
  });
  }

}
