import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { SEligibility } from '../orm/SEligibility';

@Injectable({
  providedIn: 'root'
})
export class SsEligibilityService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findByServiceNo(serviceNo:number) {
    return this.httpClient.get<SEligibility[]>(`${this.baseUrl}/get/SEligibilityList/ServiceNo/${serviceNo}`);
  }
}
