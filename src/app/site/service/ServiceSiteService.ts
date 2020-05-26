import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceSite } from '../orm/ServiceSite';

@Injectable({
  providedIn: 'root'
})
export class ServiceSiteService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findById(no: number) {
    return this.httpClient.get<ServiceSite>(`${this.baseUrl}/get/ServiceSite/no/${no}`);
  }
}
