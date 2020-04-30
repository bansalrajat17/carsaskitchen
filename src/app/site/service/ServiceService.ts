import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findById(serviceId: string): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/get/ServiceSite/${serviceId}`);
  }
}
