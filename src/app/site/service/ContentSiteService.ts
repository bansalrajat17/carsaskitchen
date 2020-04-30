import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentSiteService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findById(contentNo: string): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/get/ContentSite/${contentNo}`);
  }
}
