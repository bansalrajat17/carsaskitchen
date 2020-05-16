import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STestimonial } from '../orm/STestimonial';

@Injectable({
  providedIn: 'root'
})
export class STestimonialService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findAll()  {
    return this.httpClient.get<STestimonial[]>(`${this.baseUrl}/get/STestimonialList`);
  }

  findById(id: number): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/get/STestimonial/${id}`);
  }
}
