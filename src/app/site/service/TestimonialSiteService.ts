import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialSiteService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findById(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/get/TestimonialSite/${id}`);
  }
}
