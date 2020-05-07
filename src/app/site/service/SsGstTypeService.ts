import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SsGstType } from '../orm/SsGstType';

@Injectable({
  providedIn: 'root'
})
export class SsGstTypeService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<SsGstType[]>(`${this.baseUrl}/get/SsGstTypeList`);
  }
}
