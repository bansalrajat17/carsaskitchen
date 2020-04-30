import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private title = 'carsaskitchen';

  constructor(router: Router) {

    // override the route reuse strategy

    router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {

        // trick the Router into believing it's last link wasn't previously loaded

        router.navigated = false;

        // if you need to scroll back to top, here is the right place

        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {

  }


}
