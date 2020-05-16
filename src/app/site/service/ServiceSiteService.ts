import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSiteService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findById(no: number) {
    return this.httpClient.get(`${this.baseUrl}/get/ServiceSite/no/${no}`);
  }
}
