import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestQueue } from '../orm/RequestQueue';

@Injectable({
  providedIn: 'root'
})
export class RequestQueueService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  save(requestQueue: RequestQueue): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save/RequestQueue`, requestQueue, { responseType: 'text' });
  }
}