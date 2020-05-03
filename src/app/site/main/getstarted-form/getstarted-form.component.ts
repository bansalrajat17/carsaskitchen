import { Component, OnInit } from '@angular/core';
import { RequestQueue } from '../../../webapp/orm/RequestQueue';
import { RequestQueueService } from '../../../webapp/service/RequestQueueService';


@Component({
  selector: 'app-getstarted-form',
  templateUrl: './getstarted-form.component.html',
  styleUrls: ['./getstarted-form.component.scss']
})
export class GetstartedFormComponent implements OnInit {
  private requestQueue = new RequestQueue("", "", "", "", new Date(), new Date(), "", "");
  constructor(private requestQueueService: RequestQueueService) { }

  ngOnInit() {
  }

  saveRequestQueue() {
    this.requestQueueService.save(this.requestQueue).subscribe(data => alert(data));
  }

}
