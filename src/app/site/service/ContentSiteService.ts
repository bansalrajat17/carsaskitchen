import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { ContentSite } from '../orm/ContentSite';

@Injectable({
  providedIn: 'root'
})
export class ContentSiteService {

  private baseUrl = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  findById(no: number) {
    return this.httpClient.get(`${this.baseUrl}/get/ContentSite/no/${no}`);
  }

  findAllById(nos:number[]){
    return this.httpClient.post<ContentSite[]>(`${this.baseUrl}/get/ContentSiteList/nos`,nos);
  }
}
